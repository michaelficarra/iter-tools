/**
 * @generated-from ./$split-on-any.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { splitWith } from '../$split-with/split-with';

export function splitOnAny(source, separators) {
  return splitWith(source, value => separators.includes(value));
}

export default iterableCurry(splitOnAny, {
  validateArgs(args) {
    if (true && typeof args[1] === 'string') {
      console.warn(`For string inputs use splitOnAnySeq instead of splitOnAny`);
    }
  },
});
