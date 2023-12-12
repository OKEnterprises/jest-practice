const capitalize = require('./capitalize')

test('capitalizes first letter', () => {
  expect(capitalize('henry')).toBe('Henry')
})
