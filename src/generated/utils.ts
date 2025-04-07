import type { StatusCode } from '@/typings';

import type { DeprecatedStatusCode, ExperimentalStatusCode } from './types';

export function isDeprecatedStatusCode(code: StatusCode | number): code is DeprecatedStatusCode {
  return typeof (code as unknown) === 'number' && (code === 102 || code === 305);
}

export function isExperimentalStatusCode(
  code: StatusCode | number
): code is ExperimentalStatusCode {
  return typeof (code as unknown) === 'number' && code === 425;
}
