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

function permaPalin(str) {

  let letterCounts = {};
  let letter;
  let palindromeSum = 0;
  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    letterCounts[letter] = letterCounts[letter] || 0;
    letterCounts[letter]++;
  }
  for (let letterCount in letterCounts) {
    palindromeSum += letterCounts[letterCount] % 2;
  }

  return palindromeSum < 2;

}


module.exports = permaPalin
