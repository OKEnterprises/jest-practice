const reverseString = require('./reverseString')

test('reverses string', () => {
  expect(reverseString('abcdef')).toBe('fedcba')
})
