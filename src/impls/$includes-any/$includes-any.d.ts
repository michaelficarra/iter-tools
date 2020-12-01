import { $Promise } from '../../../generate/async.macro.cjs';

import { $SourceIterable } from '../../types/$iterable';

declare function $includesAny(
  values: Array<any>,
): (iterable: $SourceIterable<any>) => $Promise<boolean>;

declare function $includesAny(
  values: Array<any>,
  iterable: $SourceIterable<any>,
): $Promise<boolean>;

export default $includesAny;