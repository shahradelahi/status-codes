import { StatusCodes } from './generated/status-codes';
import { StatusPhrases } from './generated/status-phrases';

export type Status = keyof typeof StatusCodes;

/**
 * Type alias for status codes.
 *
 * @example
 *
 * const teapot: StatusCode<'IM_A_TEAPOT'> = 418;
 */
export type StatusCode<T extends Status = Status> = (typeof StatusCodes)[T];

/**
 * Type alias for status phrases.
 *
 * @example
 *
 * const teapot: StatusPhrase<'IM_A_TEAPOT'> = "I'm a teapot";
 */
export type StatusPhrase<T extends Status = Status> = (typeof StatusPhrases)[T];

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

export { StatusCodes, StatusPhrases };
