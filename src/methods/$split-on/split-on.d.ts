/* @macrome
 * @generated-from ./$split-on.d.ts
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable, ResultIterable } from '../../types/iterable';

// prettier-ignore
declare function split(separatorValue: string): (source: string) => ResultIterable<string>

declare function split(
  separatorValue: any,
): <T>(source: SourceIterable<T>) => ResultIterable<ResultIterable<T>>;

// prettier-ignore
declare function split(separatorValue: string, source: string): ResultIterable<string>

declare function split<T>(
  separatorValue: any,
  source: SourceIterable<T>,
): ResultIterable<ResultIterable<T>>;

export default split;
