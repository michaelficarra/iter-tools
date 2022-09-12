/**
 * @generated-from ./$select.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncSelect } from 'iter-tools-es';
import { asyncWrap } from '../../../test/async-helpers.js';

const maxSelector = (a: number, b: number) => b > a;
const minSelector = (a: number, b: number) => b < a;

describe('asyncSelect', () => {
  describe('when source is empty', () => {
    it('should return undefined', async () => {
      expect(await asyncSelect(maxSelector, null)).toEqual(undefined);
      expect(await asyncSelect(maxSelector, undefined)).toEqual(undefined);
      expect(await asyncSelect(maxSelector, asyncWrap([]))).toEqual(undefined);
    });
  });

  describe('when source has a single value', () => {
    it('should return that value', async () => {
      expect(await asyncSelect(maxSelector, asyncWrap([1]))).toEqual(1);
      expect(await asyncSelect(minSelector, asyncWrap([1]))).toEqual(1);
    });
  });

  describe('when source has values', () => {
    it('should return the best value, according to selector function', async () => {
      expect(await asyncSelect(maxSelector, asyncWrap([1, 2, 3]))).toEqual(3);
      expect(await asyncSelect(minSelector, asyncWrap([1, 2, 3]))).toEqual(1);
    });
  });
});