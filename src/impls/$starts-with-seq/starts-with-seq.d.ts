/**
 * @generated-from ./$starts-with-seq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable } from '../../types/iterable';

declare function startsWithSeq(
  valueSeq: SourceIterable<any>,
): (iterable: SourceIterable<any>) => boolean;

declare function startsWithSeq(
  valueSeq: SourceIterable<any>,
  iterable: SourceIterable<any>,
): boolean;

export { startsWithSeq };
