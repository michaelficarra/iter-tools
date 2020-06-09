/* @macrome
 * @generated-from ./$join.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncJoin, asyncToArray } from '../../..';

describe('asyncJoin', () => {
  it('should join each group with the provided value', async () => {
    expect(await asyncToArray(asyncJoin([[1], [2], [3]]))).toEqual([1, 2, 3]);
  });

  it('should have two adjacent separators when encountering an empty group', async () => {
    expect(await asyncToArray(asyncJoin([[1], [], [3]]))).toEqual([1, 3]);
  });

  it('should yield a single separator when joining two empty groups', async () => {
    expect(await asyncToArray(asyncJoin([[], []]))).toEqual([]);
  });

  it('passes through the empty iterable', async () => {
    expect(await asyncToArray(asyncJoin(null))).toEqual([]);
  });
});
