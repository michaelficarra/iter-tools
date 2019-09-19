/**
 * @generated-from ./$to-any-subseq.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { toArray as syncToArray } from '../methods/$to-array/to-array';
import { toArray } from '../methods/$to-array/to-array';
import { map } from '../methods/$map/map';

function toAnySubseq({ any, subseq }, value) {
  const values = any ? syncToArray(value) : [value];
  const subseqs = toArray(
    map(values, value => (subseq ? (typeof value === 'string' ? value : toArray(value)) : [value])),
  );
  return subseqs;
}

export default toAnySubseq;