/* @macrome
 * @generated-from ./$split-on-subseq.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncSplitOnAnySubseq } from '../$split-on-any-subseq/async-split-on-any-subseq';

export function asyncSplitOnSubseq(source, separatorSubseq) {
  return asyncSplitOnAnySubseq(source, [separatorSubseq]);
}

export default asyncIterableCurry(asyncSplitOnSubseq);
