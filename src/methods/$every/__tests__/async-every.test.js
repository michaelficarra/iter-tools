/* @macrome
 * @generated-from ./$every.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncEvery } from '../../..';

describe('asyncEvery', () => {
  it('returns true if all items is true', async () => {
    expect(await asyncEvery(n => n % 2 === 0, [4, 2, 6, 4, 8, 6])).toBe(true);
  });

  it('returns false if at least one item is false', async () => {
    expect(await asyncEvery(n => n % 2 === 0, [4, 1, 6, 4, 8, 6])).toBe(false);
  });

  it('returns true if there are no items', async () => {
    expect(await asyncEvery((n: never) => n % 2 === 0, null)).toBe(true);
  });

  it('returns true if all items are true (using a promise)', async () => {
    expect(await asyncEvery(n => Promise.resolve(n % 2 === 0), [4, 2, 6, 4, 8, 6])).toBe(true);
  });
});
