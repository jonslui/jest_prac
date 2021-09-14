const caesarCipher = require('./caesar_cipher.js');

test('wraps Z to A', () => {
  const result = caesarCipher('Z', 1);
  const expected = 'A';
  expect(result).toBe(expected);
});

test('wraps z to a', () => {
  const result = caesarCipher('z', 1);
  const expected = 'a';
  expect(result).toBe(expected);
});

test("doesn't shift non-alphabet characters", () => {
  const result = caesarCipher('. -', 1);
  const expected = '. -';
  expect(result).toBe(expected);
});

test("shifts sentence containing uppercase, lowercase, and non-alphabet characters", () => {
  const result = caesarCipher('Hello, this is a test cipher.', 33);
  const expected = 'Olssv, aopz pz h alza jpwoly.';
  expect(result).toBe(expected);
})