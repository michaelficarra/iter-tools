/**
 * @generated-from ./$regexp-exec-iter.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, GeneratorIterator } from '../../internal/iterable';
declare function regexpExecIter(
  re: RegExp,
): (iterable: InputIterable<string>) => GeneratorIterator<string>;
declare function regexpExecIter(
  re: RegExp,
  iterable: InputIterable<string>,
): GeneratorIterator<string>;
export default regexpExecIter;