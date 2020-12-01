import { $async, $await } from '../../../generate/async.macro.cjs';

import { $ensureIterable } from '../../internal/$iterable.js';

$async;
export function $size(iterable) {
  const iter = $ensureIterable(iterable);
  let size = 0;
  $await;
  /* eslint-disable no-unused-vars */
  for (const _ of iter) {
    /* eslint-enable no-unused-vars */
    size++;
  }
  return size;
}

export default $size;