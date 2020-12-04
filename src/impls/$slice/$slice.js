import { $, $async, $await } from '../../../generate/async.macro.cjs';

import { CircularBuffer } from '../../internal/circular-buffer.js';
import { $iterableCurry } from '../../internal/$iterable.js';
import { makeValidateArgs } from './internal/validate-args.js';

$async;
export function* $__sliceFromStart(source, start, end, step = 1) {
  let currentPos = 0;
  let nextValidPos = start;
  const bufferSize = Math.abs(end);
  let buffer;
  let counter = 0;

  if (end < 0) {
    buffer = new CircularBuffer(bufferSize);
  }

  $await;
  for (let value of source) {
    if (buffer) {
      value = buffer.push(value);
      counter++;
      if (counter <= bufferSize) {
        continue;
      }
    }

    if (currentPos >= end && end >= 0) {
      break;
    }

    if (nextValidPos === currentPos) {
      yield value;
      nextValidPos += step;
    }
    currentPos++;
  }
}

$async;
function $bufferedSlice(source, start, end, step) {
  const bufferSize = Math.abs(start);
  const buffer = new CircularBuffer(bufferSize);
  let counter = 0;

  $await;
  for (const value of source) {
    buffer.push(value);
    counter++;
  }

  let newEnd;
  if (isFinite(end) && end > 0) {
    newEnd = end - (counter - buffer.size);
    if (newEnd < 0) return [];
  } else {
    newEnd = end;
  }
  return $__sliceFromStart(buffer, 0, newEnd, step);
}

$async;
export function* $__slice(source, start, end, step = 1) {
  if (start >= 0) {
    yield* $__sliceFromStart(source, start, end, step);
  } else {
    yield* $await($bufferedSlice(source, start, end, step));
  }
}

export const $slice = /*#__PURE__*/ $iterableCurry($__slice, {
  validateArgs: /*#__PURE__*/ makeValidateArgs($`slice`),
  growRight: true,
  minArgs: 0,
  maxArgs: 3,
});
