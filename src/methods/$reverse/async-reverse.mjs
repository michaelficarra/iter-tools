/* @macrome
 * @generated-from ./$reverse.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncToArray } from '../$to-array/async-to-array';

export async function* asyncReverse(source) {
  let array = source;
  array = await asyncToArray(array);

  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i];
  }
}

export default asyncIterableCurry(asyncReverse);
