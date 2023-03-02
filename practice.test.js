// Testing Practice

const { capitalize, reverseString, Calculator } = require('./practice');

test('the first letter should be capitalized', () => {
  expect(capitalize('mark')).toBe('Mark');
  expect(capitalize('mark')).not.toBe('MArk');
});

test('the string should be reversed', () => {
  expect(reverseString('gnirtSdesreveR')).toBe('ReversedString');
  expect(reverseString('racecaR')).toBe('Racecar');
});

const calc = new Calculator();

test('add 1 + 2 to equal 3', () => {
  expect(calc.add(1,2)).toBe(3);
});

test('subtract 10 - 6 to equal 4', () => {
  expect(calc.subtract(10,6)).toBe(4);
});

test('multiply 4 * 5 to equal 20', () => {
  expect(calc.multiply(4,5)).toBe(20);
});

test('divide 12 / 5 to equal 2.4', () => {
  expect(calc.divide(12,5)).toBe(2.4);
})


// Testing Examples

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2})
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a+b).not.toBe(0);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).not.toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});

test('theee is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'strawberries',
  'bread',
  'milk',
  'eggs',
  'broccoli',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compiledAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/);
  expect(() => compileAndroidCode()).not.toThrow(/^you are using the wrong JDK$/);
});

// 'npm test'