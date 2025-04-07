import { expect } from 'chai';

import { getStatusCode, getStatusPhrase, StatusCodes } from './index';

const expectType: <T>(expression: T) => void = () => void 0;

describe('HTTP Status Code Utils', () => {
  describe('getStatusCode', () => {
    it('should return correct status code for valid phrases', () => {
      const test = getStatusCode('OK');
      expectType<200>(test);
      const test2 = getStatusCode('CREATED');
      expectType<201>(test2);
      const test3 = getStatusCode('NOT_FOUND');
      expectType<404>(test3);

      expect(getStatusCode('OK')).be.eq(200);
      expect(getStatusCode('CREATED')).be.eq(201);
      expect(getStatusCode('NOT_FOUND')).be.eq(404);
      expect(getStatusCode('INTERNAL_SERVER_ERROR')).be.eq(500);
    });

    it('should throw TypeError for invalid phrases', () => {
      // @ts-expect-error Testing invalid input
      expect(() => getStatusCode('Invalid Status')).to.throw(TypeError);
      // @ts-expect-error Testing invalid input
      expect(() => getStatusCode('Invalid Status')).to.throw(
        'Status phrase is not known. Received: Invalid Status'
      );
    });

    it('should throw TypeError for non-string input', () => {
      // @ts-expect-error Testing invalid input
      expect(() => getStatusCode(200)).to.throw(TypeError);
      // @ts-expect-error Testing invalid input
      expect(() => getStatusCode(null)).to.throw(TypeError);
      // @ts-expect-error Testing invalid input
      expect(() => getStatusCode(undefined)).to.throw(TypeError);
    });
  });

  describe('getStatusPhrase', () => {
    it('should return correct phrase for valid status codes', () => {
      const test = getStatusPhrase('IM_A_TEAPOT');
      expectType<"I'm a teapot">(test);
      const test2 = getStatusPhrase(StatusCodes.CREATED);
      expectType<'Created'>(test2);
      const test3 = getStatusPhrase(404);
      expectType<'Not Found'>(test3);

      expect(getStatusPhrase(200)).be.eq('OK');
      expect(getStatusPhrase(201)).be.eq('Created');
      expect(getStatusPhrase(404)).be.eq('Not Found');
      expect(getStatusPhrase(500)).be.eq('Internal Server Error');
    });

    it('should throw TypeError for invalid status codes', () => {
      expect(() => getStatusPhrase(999)).to.throw(TypeError);
      expect(() => getStatusPhrase(999)).to.throw('Status code is not known. Received: 999');
    });

    it('should throw TypeError for non-number input', () => {
      // @ts-expect-error Testing invalid input
      expect(() => getStatusPhrase('200')).to.throw(TypeError);
      // @ts-expect-error Testing invalid input
      expect(() => getStatusPhrase(null)).to.throw(TypeError);
      // @ts-expect-error Testing invalid input
      expect(() => getStatusPhrase(undefined)).to.throw(TypeError);
    });
  });
});
