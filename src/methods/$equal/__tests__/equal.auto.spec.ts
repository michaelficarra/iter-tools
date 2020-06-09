/* @macrome
 * @generated-from ./equal.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { equal, wrap } from '../../..';

describe('equal', () => {
  it('returns true if there is only one iterable', () => {
    expect(equal(wrap([1, 2, 3]))).toEqual(true);
  });

  it('returns true if all contents are equal', () => {
    expect(equal(wrap([1, 2, 3]), wrap([1, 2, 3]), wrap([1, 2, 3]))).toEqual(true);
  });

  it('returns false if any contents are not equal', () => {
    expect(equal(wrap([1, 2, 3]), wrap([1, 2, 3]), wrap([1, 2, 4]))).toEqual(false);
  });

  it('returns false if any arrays are not the same length', () => {
    expect(equal(wrap([1, 2, 3]), wrap([1, 2, 3]), wrap([1, 2, 3, 4]))).toEqual(false);
  });
});
