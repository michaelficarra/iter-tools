/**
 * @generated-from ./$join-with-seq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable as SyncSourceIterable } from '../../types/iterable';
import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncJoinWithSeq<W, T>(
  seq: SyncSourceIterable<W>,
  source: AsyncSourceIterable<AsyncSourceIterable<T>>,
): AsyncResultIterable<T | W>;

declare function asyncJoinWithSeq<W>(
  seq: SyncSourceIterable<W>,
): <T>(source: AsyncSourceIterable<AsyncSourceIterable<T>>) => AsyncResultIterable<T | W>;

export { asyncJoinWithSeq };
