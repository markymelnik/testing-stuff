// Testing Practice

const { capitalize, reverseString } = require('./practice');

test('the first letter should be capitalized', () => {
  expect(capitalize('mark')).toBe('Mark');
  expect(capitalize('mark')).not.toBe('MArk');
});

test('the string should be reversed', () => {
  expect(reverseString('gnirtSdesreveR')).toBe('ReversedString');
  expect(reverseString('racecaR')).toBe('Racecar');
});


