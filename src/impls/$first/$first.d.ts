import { $Promise } from '../../../generate/async.macro.cjs';

import { $SourceIterable } from '../../types/$iterable';

declare function $first<T>(iterable: $SourceIterable<T>): $Promise<T | undefined>;

export { $first };
