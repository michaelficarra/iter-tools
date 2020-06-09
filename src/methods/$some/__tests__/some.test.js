/* @macrome
 * @generated-from ./$some.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { some } from '../../..';

describe('some', () => {
  it('returns true if at least one item is true', () => {
    expect(some(n => n % 2 === 0, [1, 2, 3, 4, 5, 6])).toBe(true);
  });

  it('returns false if all items are false', () => {
    expect(some(n => n % 2 === 0, [1, 3, 3, 7, 5, 1])).toBe(false);
  });

  it('returns false if there are no items', () => {
    expect(some((n: never) => n % 2 === 0, null)).toBe(false);
  });
});
