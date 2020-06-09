/* @macrome
 * @generated-from ./$split-on-any.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { splitOnAny } from '../../..';
import { unwrapDeep as uw } from '../../../__tests__/helpers';
import { wrap } from '../../../__tests__/__framework__/wrap';

describe('splitOnAny', () => {
  it('should split on an occurance of any value', () => {
    expect(uw(splitOnAny([null, undefined], wrap([1, null, undefined, 3])))).toEqual([
      [1],
      [],
      [3],
    ]);
  });

  it('does not split when passed no values', () => {
    expect(uw(splitOnAny(null, wrap([1, 2, 3])))).toEqual([[1, 2, 3]]);
  });

  it('passes through the empty iterable', () => {
    expect(uw(splitOnAny([], null))).toEqual([]);
  });

  it('the empty string is an empty iterable', () => {
    expect(uw(splitOnAny([], ''))).toEqual([]);
  });

  describe('given a string', () => {
    it('should split on every item which is equal to the on argument', () => {
      expect(uw(splitOnAny('Ø', '11Ø22Ø33'))).toEqual(['11', '22', '33']);
    });
  });
});
