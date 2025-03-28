import * as cheerio from 'cheerio';
import { Project, VariableDeclarationKind } from 'ts-morph';

interface DetailedStatus {
  code: string;
  phrase: string;
  description: string;
  descriptionHTML: string;
  link: string;
  isDeprecated: boolean;
  isExperimental: boolean;
}

async function loadMdnPage(): Promise<cheerio.Root> {
  const response = await fetch(
    'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status'
  );
  const text = await response.text();
  return cheerio.load(text);
}

async function getDetailedCodes(): Promise<DetailedStatus[]> {
  const $ = await loadMdnPage();

  const els = $('.main-page-content > section > .section-content > dl > dt').toArray();
  const detailedCodes: DetailedStatus[] = [];

  for (const el of els) {
    const linkEl = $(el).find('a');
    const [code, ...rest] = linkEl.find('code').text().trim().split(' ') as [string];
    const phrase = rest.join(' ').trim();

    const link = `https://developer.mozilla.org${linkEl.attr('href')}`;
    const description = linkEl.parent().next().text().trim();
    const descriptionHTML = linkEl.parent().next().html()?.trim() ?? '';

    const isDeprecated = linkEl.parent().text().includes('Deprecated');
    const isExperimental = linkEl.parent().text().includes('Experimental');

    detailedCodes.push({
      code,
      phrase,
      description,
      descriptionHTML,
      link,
      isDeprecated,
      isExperimental,
    });
  }

  return detailedCodes;
}

function generateCommentBlock(status: DetailedStatus): string {
  let description = status.descriptionHTML.replaceAll('\n', '\n * ');
  if (description.startsWith('<p>') && description.endsWith('</p>'))
    description = description.substring(3, description.length - 4);
  return [
    '/**',
    ` * ${status.code} ${status.phrase}`,
    ' * ',
    ` * ${description}`.trim(),
    ' * ',
    status.isDeprecated ? ' * @deprecated' : null,
    status.isExperimental ? ' * @experimental' : null,
    ` * @see ${status.link}`,
    ' */',
  ]
    .filter(Boolean)
    .join('\n');
}

async function main(): Promise<void> {
  const detailedStatuses = await getDetailedCodes();

  const project = new Project();

  const codesFile = project.createSourceFile('src/generated/status-codes.ts', undefined, {
    overwrite: true,
  });
  codesFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    declarations: [
      {
        name: 'StatusCodes',
        trailingTrivia: ' as const',
        initializer: (writer) => {
          writer.inlineBlock(() => {
            for (const status of detailedStatuses) {
              const key = status.phrase
                .toUpperCase()
                .replaceAll(/['"]/g, '')
                .replaceAll(/[\s-]/g, '_');
              writer.writeLine(generateCommentBlock(status)).writeLine(`${key}: ${status.code},`);
            }
          });
        },
      },
    ],
  });
  await codesFile.save();

  const phrasesFile = project.createSourceFile('src/generated/status-phrases.ts', undefined, {
    overwrite: true,
  });
  phrasesFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    declarations: [
      {
        name: 'StatusPhrases',
        trailingTrivia: ' as const',
        initializer: (writer) => {
          writer.inlineBlock(() => {
            for (const status of detailedStatuses) {
              const key = status.phrase
                .toUpperCase()
                .replaceAll(/['"]/g, '')
                .replaceAll(/[\s-]/g, '_');
              const phrase = status.phrase.replaceAll(/['"]/g, (v) => '\\' + v);
              writer.writeLine(generateCommentBlock(status)).writeLine(`${key}: '${phrase}',`);
            }
          });
        },
      },
    ],
  });
  await phrasesFile.save();
}

main();
