/* @macrome
 * @generated-from ./async-batch.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncBatch, asyncToArray, range } from '../../..';

describe('asyncBatch', () => {
  it('returns an iterable with batches', async () => {
    const iter = asyncBatch(2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(await asyncToArray(iter)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('returns an iterable with batches when passed an iterable', async () => {
    const iter = asyncBatch(
      2,
      range({
        start: 1,
        end: 10,
      }),
    );
    expect(await asyncToArray(iter)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('returns an iterable with batches when passed an iterable (2)', async () => {
    const iter = asyncBatch(
      2,
      range({
        start: 1,
        end: 9,
      }),
    );
    expect(await asyncToArray(iter)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]]);
  });

  it('returns an iterable with batches (curried version)', async () => {
    const iter = asyncBatch(2);
    expect(
      await asyncToArray(
        iter(
          range({
            start: 1,
            end: 10,
          }),
        ),
      ),
    ).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('returns an empty iterable when passed null', async () => {
    expect(await asyncToArray(asyncBatch(2, null))).toEqual([]);
  });

  it('errors when passed size <= 0', async () => {
    expect(() => asyncBatch(0, [])).toThrowErrorMatchingSnapshot();
  });
});
