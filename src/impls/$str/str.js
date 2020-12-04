/**
 * @generated-from ./$str.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';

export function __str(chars) {
  let result = '';

  for (const char of chars) {
    result += char.toString();
  }

  return result;
}

export const str = /*#__PURE__*/ iterableCurry(__str, {
  reduces: true,
});
