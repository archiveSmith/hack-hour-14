/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 *  - permPalin('abab') => true
 *  - permPalin('cbaba') => true
 *  - permPalin('cbac') => false
 *  - permPalin('a') => true
 *
 */

const permPalin = (str) => {
  const store = []
  str = str.split('').sort()

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      store.push(str[i])
      continue
    }
    if (store[store.length - 1] === str[i]) store.pop()
    else store.push(str[i])
  }

  return store.length <= 1
}

module.exports = permPalin
