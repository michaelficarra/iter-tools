/* @macrome
 * @generated-from ./$for-each.d.ts
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable } from '../../types/iterable';

declare function forEach<T>(
  callback: (item: T, i: number) => void,
): (iterable: SourceIterable<T>) => void;

declare function forEach<T>(
  callback: (item: T, i: number) => void,
  iterable: SourceIterable<T>,
): void;

export default forEach;
