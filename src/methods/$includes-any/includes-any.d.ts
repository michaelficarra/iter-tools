/* @macrome
 * @generated-from ./$includes-any.d.ts
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable } from '../../types/iterable';
import { SourceIterable as SyncSourceIterable } from '../../types/iterable';

declare function includesAny(
  values: SyncSourceIterable<any>,
): (iterable: SourceIterable<any>) => boolean;

declare function includesAny(
  values: SyncSourceIterable<any>,
  iterable: SourceIterable<any>,
): boolean;

export default includesAny;
