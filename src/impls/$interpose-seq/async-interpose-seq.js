/**
 * @generated-from ./$interpose-seq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry, asyncCache } from '../../internal/async-iterable.js';

export async function* __asyncInterposeSeq(source, seq) {
  const subseq_ = await asyncCache(seq);

  let first = true;
  for await (const sourceValue of source) {
    if (!first) yield* subseq_;
    yield sourceValue;
    first = false;
  }
}

export const asyncInterposeSeq = /*#__PURE__*/ asyncIterableCurry(__asyncInterposeSeq);
