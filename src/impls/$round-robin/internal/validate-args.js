import { isObject, isDef } from '../../../internal/shapes.js';
import { isInteger } from '../../../internal/number.js';

export const makeValidateArgs = (methodName) =>
  function validateArgs(args) {
    if (isObject(args[1])) {
      const { start, step } = args[1];
      args[1] = start;
      args[2] = step;
    }

    if (isDef(args[2])) {
      args[2] = Number(args[2]);
      if (!isInteger(args[2], true)) {
        throw new Error(`step argument to ${methodName} must be a non-zero integer`);
      }
    }
  };
