/**
 * @generated-from ./$spliterate.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { AsyncPartsIterator } from '../../internal/async-parts-iterator.js';
import { __asyncMap } from '../$map/async-map.js';
import { __asyncWrap } from '../$wrap/async-wrap.js';

export function __asyncSpliterate(source, strategy, options = {}) {
  return new AsyncPartsIterator(source, strategy, options);
}

export const asyncSpliterate = /*#__PURE__*/ asyncIterableCurry(
  function $spliterate(...args) {
    return __asyncMap(__asyncSpliterate(...args), __asyncWrap);
  },
  {
    minArgs: 1,
    maxArgs: 2,
    growRight: true,
  },
);
