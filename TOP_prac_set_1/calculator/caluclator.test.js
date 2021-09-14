const calculator = require('./calculator.js');

test('add', () => {
  const result = calculator.add(1,2);
  expect(result).toBe(3);
})

test('subtract', () => {
  const result = calculator.subtract(2,1);
  expect(result).toBe(1);
})

test('multiply', () => {
  const result = calculator.multiply(2,2);
  expect(result).toBe(4);
})

test('divide', () => {
  const result = calculator.divide(4,2);
  expect(result).toBe(2);
})