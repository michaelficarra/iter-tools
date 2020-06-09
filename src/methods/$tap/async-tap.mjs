/* @macrome
 * @generated-from ./$tap.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';

export async function* asyncTap(source, callback) {
  let c = 0;
  for await (const item of source) {
    callback(item, c++);
    yield item;
  }
}

export default asyncIterableCurry(asyncTap);
