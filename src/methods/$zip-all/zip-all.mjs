/* @macrome
 * @generated-from ./$zip-all.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';
import { map } from '../$map/map';

export function* zipAll(sources, { filler } = {}) {
  const iters = sources.map(arg => arg[Symbol.iterator]());
  const itersDone = iters.map(iter => ({
    done: false,
    iter,
  }));

  try {
    while (true) {
      const results = map(iters, iter => iter.next());
      const syncResults = results;

      const zipped = new Array(iters.length);

      let i = 0;
      let allDone = true;
      for (const { value, done } of syncResults) {
        allDone = allDone && done;
        itersDone[i].done = done;
        zipped[i] = done ? filler : value;
        i++;
      }

      if (allDone) break;
      yield zipped;
    }
  } finally {
    for (const { iter, done } of itersDone) {
      if (!done && typeof iter.return === 'function') iter.return();
    }
  }
}

export default iterableCurry(zipAll, {
  variadic: true,
  minArgs: 0,
  maxArgs: 1,
});
