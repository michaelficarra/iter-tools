/**
 * @generated-from ./$split-at.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { ResultIterable as SyncResultIterable } from '../../types/iterable';
import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncSplitAt(
  idx: number,
): <T>(source: AsyncSourceIterable<T>) => SyncResultIterable<AsyncResultIterable<T>>;

declare function asyncSplitAt<T>(
  idx: number,
  source: AsyncSourceIterable<T>,
): SyncResultIterable<AsyncResultIterable<T>>;

export { asyncSplitAt };
