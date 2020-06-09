/* @macrome
 * @generated-from ./wrap-keys.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { wrapKeys } from '../../..';

describe('wrapKeys', () => {
  it('works with Map', () => {
    const map = new Map([['foo', 'bar'], ['fox', 'far']]);
    expect(Array.from(wrapKeys(map))).toEqual(['foo', 'fox']);
  });

  it('works with null', () => {
    const i = wrapKeys(null);
    expect(Array.from(i)).toEqual([]);
  });
});
