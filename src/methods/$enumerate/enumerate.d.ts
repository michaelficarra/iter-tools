/* @macrome
 * @generated-from ./$enumerate.d.ts
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable, ResultIterable } from '../../types/iterable';

declare function enumerate<T>(iterable: SourceIterable<T>): ResultIterable<[number, T]>;

declare function enumerate<T>(
  firstIdx: number,
  source: SourceIterable<T>,
): ResultIterable<[number, T]>;

declare function enumerate(
  firstIdx: number,
): <T>(source: SourceIterable<T>) => ResultIterable<[number, T]>;

export default enumerate;
