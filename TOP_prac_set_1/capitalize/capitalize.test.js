const capitalize = require('./capitalize.js');

test('correctly capitalizes first letter', () => {
  const expected = 'Test';
  const result = capitalize('test')
  expect(result[0]).toBe(expected[0])
});

test('correctly capitalize first letter and returns word', () => {
  const expected = 'Test';
  const result = capitalize('test');
  expect(result).toBe(expected);
});