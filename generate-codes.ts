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

  const codesFile = project.createSourceFile('src/generated/codes.ts', undefined, {
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

  const phrasesFile = project.createSourceFile('src/generated/phrases.ts', undefined, {
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

  const deprecatedCodes = detailedStatuses.filter((status) => status.isDeprecated);
  const experimentalCodes = detailedStatuses.filter((status) => status.isExperimental);

  // Generate Utilities
  const utilityFile = project.createSourceFile('src/generated/utils.ts', undefined, {
    overwrite: true,
  });

  // Only add isDeprecated and isExperimental to the utility file if they are used
  utilityFile.addFunction({
    name: 'isDeprecatedStatusCode',
    isExported: true,
    returnType: 'code is DeprecatedStatusCode',
    parameters: [
      {
        name: 'code',
        type: 'StatusCode | number',
      },
    ],
    statements: (writer) => {
      writer.writeLine(
        `return typeof (code as unknown) === 'number' && (${deprecatedCodes.map((status) => `code === ${status.code}`).join(' || ')});`
      );
    },
  });

  utilityFile.addFunction({
    name: 'isExperimentalStatusCode',
    isExported: true,
    returnType: 'code is ExperimentalStatusCode',
    parameters: [
      {
        name: 'code',
        type: 'StatusCode | number',
      },
    ],
    statements: (writer) => {
      writer.writeLine(
        `return typeof (code as unknown) === 'number' && (${experimentalCodes.map((status) => `code === ${status.code}`).join(' || ')});`
      );
    },
  });

  // add import status ExperimentalStatusCode and DeprecatedStatusCode
  utilityFile.addImportDeclaration({
    moduleSpecifier: '@/typings',
    namedImports: ['StatusCode'],
    isTypeOnly: true,
  });

  utilityFile.addImportDeclaration({
    moduleSpecifier: './types',
    namedImports: ['DeprecatedStatusCode', 'ExperimentalStatusCode'],
    isTypeOnly: true,
  });

  await utilityFile.save();

  // Create status types
  const statusTypesFile = project.createSourceFile('src/generated/types.ts', undefined, {
    overwrite: true,
  });

  statusTypesFile.addTypeAlias({
    isExported: true,
    name: 'InfoStatusCode',
    type: (writer) => {
      writer.writeLine(
        detailedStatuses
          .filter((status) => status.code.startsWith('1'))
          .map((status) => status.code)
          .join(' | ')
      );
    },
  });

  statusTypesFile.addTypeAlias({
    isExported: true,
    name: 'SuccessStatusCode',
    type: (writer) => {
      writer.writeLine(
        detailedStatuses
          .filter((status) => status.code.startsWith('2'))
          .map((status) => status.code)
          .join(' | ')
      );
    },
  });

  statusTypesFile.addTypeAlias({
    isExported: true,
    name: 'DeprecatedStatusCode',
    type: (writer) => {
      writer.writeLine(deprecatedCodes.map((status) => status.code).join(' | '));
    },
  });

  statusTypesFile.addTypeAlias({
    isExported: true,
    name: 'ExperimentalStatusCode',
    type: (writer) => {
      writer.writeLine(experimentalCodes.map((status) => status.code).join(' | '));
    },
  });

  statusTypesFile.addTypeAlias({
    isExported: true,
    name: 'RedirectStatusCode',
    type: (writer) => {
      writer.writeLine(
        detailedStatuses
          .filter((status) => status.code.startsWith('3'))
          .map((status) => status.code)
          .join(' | ')
      );
    },
  });

  statusTypesFile.addTypeAlias({
    isExported: true,
    name: 'ClientErrorStatusCode',
    type: (writer) => {
      writer.writeLine(
        detailedStatuses
          .filter((status) => status.code.startsWith('4'))
          .map((status) => status.code)
          .join(' | ')
      );
    },
  });

  statusTypesFile.addTypeAlias({
    isExported: true,
    name: 'ServerErrorStatusCode',
    type: (writer) => {
      writer.writeLine(
        detailedStatuses
          .filter((status) => status.code.startsWith('5'))
          .map((status) => status.code)
          .join(' | ')
      );
    },
  });
  await statusTypesFile.save();
}

main();
