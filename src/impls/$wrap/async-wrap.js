/**
 * @generated-from ./$wrap.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncWrapWithResultIterable } from '../../internal/async-iterable.js';
import { asyncNullableWrap as __asyncWrap } from '../../internal/async-wrap.js';

export { __asyncWrap };

export const asyncWrap = /*#__PURE__*/ asyncWrapWithResultIterable(__asyncWrap);
