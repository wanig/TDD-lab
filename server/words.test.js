const words = require('./words');

test('Word count for "Hello" is 1', () => {
  expect(words.count('Hello')).toBe(1);
});