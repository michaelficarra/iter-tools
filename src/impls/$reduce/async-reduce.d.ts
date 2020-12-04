/**
 * @generated-from ./$reduce.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable } from '../../types/async-iterable';

declare function asyncReduce<T>(
  reducer: (result: T, value: T, i: number) => T | Promise<T>,
): (iterable: AsyncSourceIterable<T>) => Promise<T>;

declare function asyncReduce<O, T>(
  reducer: (result: O, value: T, i: number) => O | Promise<O>,
): (iterable: AsyncSourceIterable<T>) => Promise<O>;

declare function asyncReduce<O, T>(
  initial: O,
  reducer: (result: O, value: T, i: number) => O | Promise<O>,
): (iterable: AsyncSourceIterable<T>) => Promise<O>;

declare function asyncReduce<T>(
  reducer: (result: T, value: T, i: number) => T | Promise<T>,
  iterable: AsyncSourceIterable<T>,
): Promise<T>;

declare function asyncReduce<O, T>(
  reducer: (result: O, value: T, i: number) => O | Promise<O>,
  iterable: AsyncSourceIterable<T>,
): Promise<O>;

declare function asyncReduce<O, T>(
  initial: O,
  reducer: (result: O, value: T, i: number) => O | Promise<O>,
  iterable: AsyncSourceIterable<T>,
): Promise<O>;

export { asyncReduce };
