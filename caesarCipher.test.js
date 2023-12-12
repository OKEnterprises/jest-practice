const caesarCipher = require('./caesarCipher')

test('moves one character', () => {
    expect(caesarCipher('hello', 1)).toBe('IFMMP')
})

test('moves two characters', () => {
    expect(caesarCipher('zebra', 2)).toBe('BGDTC')
})