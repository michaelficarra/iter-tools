/* @macrome
 * @generated-from ./$last.d.ts
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncSourceIterable } from '../../types/async-iterable';

declare function asyncLast<T>(iterable: AsyncSourceIterable<T>): Promise<T | undefined>;

export default asyncLast;
