/**
 * @generated-from ./$take.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncTake<T>(n: number, iterable: AsyncSourceIterable<T>): AsyncResultIterable<T>;

declare function asyncTake<T>(
  n: number,
): (iterable: AsyncSourceIterable<T>) => AsyncResultIterable<T>;

export { asyncTake };
