import { StatusCodes } from '@/generated/codes';
import { StatusPhrases } from '@/generated/phrases';
import type {
  ClientErrorStatusCode,
  InfoStatusCode,
  RedirectStatusCode,
  ServerErrorStatusCode,
  SuccessStatusCode,
} from '@/generated/types';

import type { Status, StatusCode, StatusPhrase } from './typings';

/**
 * Returns the HTTP status code for a given status phrase.
 *
 * @example
 *
 * import { getStatusCode } from '@se-oss/status-codes';
 *
 * getStatusCode('OK'); // returns 200
 * getStatusCode('CREATED'); // returns 201
 *
 * @param phrase - The HTTP status phrase
 * @returns The corresponding HTTP status code
 * @throws {TypeError} If input is not valid or phrase is unknown
 */
export function getStatusCode<
  T extends Status,
  U = T extends Status ? (typeof StatusCodes)[T] : never,
>(phrase: T): U {
  if (typeof (phrase as unknown) !== 'string') {
    throw new TypeError(`Status phrase is not a string. Received: ${phrase}`);
  }

  const code = StatusCodes[phrase] as U;
  if (!code) {
    throw new TypeError(`Status phrase is not known. Received: ${phrase}`);
  }

  return code;
}

/**
 * Returns the HTTP status phrase for a given status code.
 *
 * @example
 *
 * import { getStatusPhrase, StatusCodes } from '@se-oss/status-codes';
 *
 * getStatusPhrase(200); // returns 'Ok'
 * getStatusPhrase(StatusCodes.CREATED); // returns 'Created'
 *
 * @param code - The HTTP status code
 * @returns The corresponding HTTP status phrase
 * @throws {TypeError} If input is not valid or code is unknown
 */
export function getStatusPhrase<
  T extends Status | StatusCode | number,
  C extends Status = T extends Status
    ? T
    : T extends StatusCode
      ? Status extends infer K
        ? K extends Status
          ? T extends (typeof StatusCodes)[K]
            ? K
            : never
          : never
        : never
      : never,
  U = C extends Status ? (typeof StatusPhrases)[C] : StatusPhrase,
>(code: T): U {
  if (typeof (code as unknown) === 'string') {
    const phrase = StatusCodes[code as Status] as U;
    if (!phrase) {
      throw new TypeError(`Status code is not known. Received: ${code}`);
    }

    return phrase;
  }

  if (typeof (code as unknown) === 'number') {
    const key = Object.entries(StatusCodes).find(([_, value]) => value === code)?.[0];
    if (!key) {
      throw new TypeError(`Status code is not known. Received: ${code}`);
    }

    return StatusPhrases[key as Status] as U;
  }

  throw new TypeError(`Status code is not a number or string. Received: ${code}`);
}

/**
 * Check if status is informational (100–199).
 *
 * @example isInfoStatusCode(102) // true
 */
export function isInfoStatusCode(code: StatusCode | number): code is InfoStatusCode {
  return typeof (code as unknown) === 'number' && code >= 100 && code <= 199;
}

/**
 * Check if status is success (200–299).
 *
 * @example isSuccessStatusCode(201) // true
 */
export function isSuccessStatusCode(code: StatusCode | number): code is SuccessStatusCode {
  return typeof (code as unknown) === 'number' && code >= 200 && code <= 299;
}

/**
 * Check if status is redirect (300–399).
 *
 * @example isRedirectStatusCode(301) // true
 */
export function isRedirectStatusCode(code: StatusCode | number): code is RedirectStatusCode {
  return typeof (code as unknown) === 'number' && code >= 300 && code <= 399;
}

/**
 * Check if status is client error (400–499).
 *
 * @example isClientErrorStatusCode(404) // true
 */
export function isClientErrorStatusCode(code: StatusCode | number): code is ClientErrorStatusCode {
  return typeof (code as unknown) === 'number' && code >= 400 && code <= 499;
}

/**
 * Check if status is server error (500–599).
 *
 * @example isServerErrorStatusCode(500) // true
 */
export function isServerErrorStatusCode(code: StatusCode | number): code is ServerErrorStatusCode {
  return typeof (code as unknown) === 'number' && code >= 500 && code <= 599;
}

/**
 * Check if status has no content (101, 204, 205, 304).
 *
 * @example isContentlessStatusCode(204) // true
 */
export function isContentlessStatusCode(code: StatusCode | number): code is ContentlessStatusCode {
  return (
    typeof (code as unknown) === 'number' &&
    (code === 101 || code === 204 || code === 205 || code === 304)
  );
}

/**
 * Check if status can have content.
 *
 * @example isContentfulStatusCode(200) // true
 */
export function isContentfulStatusCode(code: StatusCode | number): code is ContentlessStatusCode {
  return !isContentlessStatusCode(code);
}

export { StatusCodes, StatusPhrases };
export { isDeprecatedStatusCode, isExperimentalStatusCode } from './generated/utils';

// -- Typings -------------------------

export type ContentlessStatusCode = 101 | 204 | 205 | 304;
export type ContentfulStatusCode = Exclude<StatusCode, ContentlessStatusCode>;

export type * from './generated/types';
export type { Status, StatusCode, StatusPhrase } from './typings';
