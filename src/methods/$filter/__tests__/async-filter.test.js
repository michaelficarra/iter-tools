/* @macrome
 * @generated-from ./$filter.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncFilter, asyncToArray, range } from '../../..';

describe('asyncFilter', () => {
  it('returns filtered iterable', async () => {
    const iter = asyncFilter(item => item % 2 === 0, [1, 2, 3, 4, 5, 6]);
    expect(await asyncToArray(iter)).toEqual([2, 4, 6]);
  });

  it('returns filtered iterable from iterable', async () => {
    const iter = asyncFilter(item => item % 2 === 0, range(1, 7));
    expect(await asyncToArray(iter)).toEqual([2, 4, 6]);
  });

  it('returns filtered iterable (curried version)', async () => {
    const asyncFilterEven = asyncFilter((item: number) => item % 2 === 0);
    expect(await asyncToArray(asyncFilterEven(range(1, 7)))).toEqual([2, 4, 6]);
  });

  it('returns empty iterable from null', async () => {
    expect(await asyncToArray(asyncFilter((item: never) => item, null))).toEqual([]);
  });

  it('returns filtered iterable (using a promise)', async () => {
    const iter = asyncFilter(item => Promise.resolve(item % 2 === 0), [1, 2, 3, 4, 5, 6]);
    expect(await asyncToArray(iter)).toEqual([2, 4, 6]);
  });
});
