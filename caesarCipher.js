function rolloverCalc(index, key) {
    return index + key >= 26 ? index + key - 26 : index + key
}

function caesarCipher(str, key) {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chars = str.split("");
    const indices = chars.map(char => ALPHABET.indexOf(char.toUpperCase()));
    const cipherChars = indices.map(index => ALPHABET[rolloverCalc(index, key)])
    return cipherChars.join('')
}

module.exports = caesarCipher
