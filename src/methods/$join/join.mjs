/* @macrome
 * @generated-from ./$join.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { wrapWithMethodIterable, ensureIterable } from '../../internal/iterable';
import { joinWithSubseq } from '../$join-with-subseq/join-with-subseq';

const emptySubseq = [];

export function join(source) {
  return joinWithSubseq(ensureIterable(source), emptySubseq);
}

export default wrapWithMethodIterable(join);
