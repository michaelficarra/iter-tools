/* @macrome
 * @generated-from ./$includes-any-subseq.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';
import { includes_ } from '../$includes_/includes_';

const config = {
  any: true,
  subseq: true,
};

export function includesAnySubseq(iterable, subseqs) {
  return includes_(iterable, config, subseqs);
}

export default iterableCurry(includesAnySubseq, {
  reduces: true,
});
