/* @macrome
 * @generated-from ./take.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { take, toArray, wrap } from '../../..';

describe('take', () => {
  it('takes the first n items', () => {
    expect(toArray(take(2, wrap([1, 2, 3])))).toEqual([1, 2]);
  });
});
