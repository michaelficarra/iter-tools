/* @macrome
 * @generated-from ./async-compress.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncCompress, asyncToArray, range } from '../../..';

describe('asyncCompress', () => {
  it('compress iterables', async () => {
    const iter = asyncCompress(range(10), [false, true, false, true, true]);
    expect(await asyncToArray(iter)).toEqual([1, 3, 4]);
  });
});
