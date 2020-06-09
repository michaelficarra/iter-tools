/* @macrome
 * @generated-from ./every.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { every } from '../../..';

describe('every', () => {
  it('returns true if all items is true', () => {
    expect(every(n => n % 2 === 0, [4, 2, 6, 4, 8, 6])).toBe(true);
  });

  it('returns false if at least one item is false', () => {
    expect(every(n => n % 2 === 0, [4, 1, 6, 4, 8, 6])).toBe(false);
  });

  it('returns true if there are no items', () => {
    expect(every((n: never) => n % 2 === 0, null)).toBe(true);
  });
});
