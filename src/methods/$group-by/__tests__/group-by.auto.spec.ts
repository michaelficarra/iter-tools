/**
 * @generated-from ./group-by.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { groupBy, toArray } from '../../..';
describe('groupBy', () => {
  it('with key function', () => {
    const iter = groupBy(item => item.toLowerCase(), 'AaaBbaACccCD');
    let next = iter.next();
    expect(next.value[0]).toBe('a');
    next = iter.next();
    expect(next.value[0]).toBe('b');
    next = iter.next();
    expect(next.value[0]).toBe('a');
    next = iter.next();
    expect(next.value[0]).toBe('c');
    next = iter.next();
    expect(next.value[0]).toBe('d');
    next = iter.next();
    expect(next.done).toBe(true);
  });
  it('main cursor (curried)', () => {
    const iter = groupBy(_ => _)('AAABBAACCCCD');
    let next = iter.next();
    expect(next.value[0]).toBe('A');
    next = iter.next();
    expect(next.value[0]).toBe('B');
    next = iter.next();
    expect(next.value[0]).toBe('A');
    next = iter.next();
    expect(next.value[0]).toBe('C');
    next = iter.next();
    expect(next.value[0]).toBe('D');
    next = iter.next();
    expect(next.done).toBe(true);
  });
  it('empty source returns empty iterable', () => {
    expect(toArray(groupBy(_ => _, null))).toEqual([]);
    expect(toArray(groupBy(_ => _)(null))).toEqual([]);
    expect(toArray(groupBy(_ => _, undefined))).toEqual([]);
    expect(toArray(groupBy(_ => _)(undefined))).toEqual([]);
  });
});
