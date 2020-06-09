/* @macrome
 * @generated-from ./$leading-window.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer';
import { asyncConcat } from '../$concat/async-concat';
import { repeatTimes } from '../repeat-times/repeat-times';

export async function* asyncLeadingWindow(source, size, { filler } = {}) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  buffer.fill(filler);

  let index = 0;
  for await (const item of asyncConcat(source, repeatTimes(size - 1, filler))) {
    buffer.push(item);
    if (index + 1 >= size) {
      yield bufferReadProxy;
    }
    index++;
  }
}

export default asyncIterableCurry(asyncLeadingWindow, {
  minArgs: 1,
  maxArgs: 2,
  optionalArgsAtEnd: true,

  validateArgs(args) {
    if (args[0] && typeof args[0] === 'object') {
      const { filler, size } = args[0];

      if (size !== undefined && args[1] !== undefined) {
        throw new Error(
          'size cannot be specified as both a positional and named argument to leadingWindow',
        );
      }
      args[0] = size;
      args[1] = {
        filler,
      };
    }
  },
});
