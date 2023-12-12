function reverseString (str) {
  const chars = str.split('');
  chars.reverse();
  return chars.join('')
}

module.exports = reverseString
