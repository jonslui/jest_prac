const reverseString = require('./reverse_string.js');

test('Works with "How are you today?"', () => {
  const expected = '?yadot uoy era woH';
  const result = reverseString('How are you today?');
  expect(result).toBe(expected);
})