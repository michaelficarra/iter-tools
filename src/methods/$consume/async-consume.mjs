/* @macrome
 * @generated-from ./$consume.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';

let warnedCallbackDeprecation = false;

const warnCallbackDeprecation = () => {
  if (!warnedCallbackDeprecation) {
    console.warn(
      `\`${'asyncConsume'}(callback, iterable)\` is deprecated and will be removed in iter-tools@8. ` +
        `Instead use ${'asyncForEach'}(callback, iterable)`,
    );
    warnedCallbackDeprecation = true;
  }
};

export async function asyncConsume(iterable, callback = () => {}) {
  let c = 0;
  for await (const item of iterable) {
    await callback(item, c++);
  }
}

export default asyncIterableCurry(asyncConsume, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1,

  validateArgs(args) {
    if (typeof args[0] === 'function') {
      warnCallbackDeprecation();
    }
  },
});
