/* @macrome
 * @generated-from ./async-includes-any-subseq.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIncludesAnySubseq, range } from '../../..';

describe('asyncIncludesAnySubseq', () => {
  it('returns true if the iterable contains any of the given subsequences', async () => {
    expect(await asyncIncludesAnySubseq([[0, 1], [1, 2]], range(0, 10))).toBe(true);
  });

  it('returns true if the iterable equals any of the given subsequences', async () => {
    expect(await asyncIncludesAnySubseq([range(0, 2), range(1, 3)], range(1, 3))).toBe(true);
  });

  it('returns true if no subsequences are given', async () => {
    expect(await asyncIncludesAnySubseq([], range(1, 3))).toBe(true);
  });

  it('returns false if the given subsequences are longer than the iterable', async () => {
    expect(await asyncIncludesAnySubseq([range(0, 3), range(1, 4)], range(1, 3))).toBe(false);
  });

  describe('when the iterable is empty', () => {
    it('returns true if any subsequence is empty', async () => {
      expect(await asyncIncludesAnySubseq([[], [null]], [])).toBe(true);
    });

    it('returns false if all subsequences are not empty', async () => {
      expect(await asyncIncludesAnySubseq([[undefined]], [])).toBe(false);
    });
  });
});
