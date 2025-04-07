import type { StatusCodes } from '@/generated/codes';
import type { StatusPhrases } from '@/generated/phrases';

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
