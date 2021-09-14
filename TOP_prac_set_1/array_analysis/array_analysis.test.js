// const object = analyze([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };
const analyze = require('./array_analysis.js');

test('average', () => {
  const result = analyze([1,8,3,4,2,6]).average;
  const expected = 4;
  expect(result).toBe(expected);
})

test('min', () => {
  const result = analyze([1,8,3,4,2,6]).min;
  const expected = 1;
  expect(result).toBe(expected);
})

test('max', () => {
  const result = analyze([1,8,3,4,2,6]).max;
  const expected = 8;
  expect(result).toBe(expected);
})

test('length', () => {
  const result = analyze([1,8,3,4,2,6]).length;
  const expected = 6;
  expect(result).toBe(expected);
})