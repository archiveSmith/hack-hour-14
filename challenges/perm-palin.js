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

function permPalin(str) {
  // create an object to store counts of each characters
  const counter = {};
  // loop through string
  for (let i = 0; i < str.length; i += 1) {
    // set a variable for character
    const chr = str[i];
    // if char is not yet stored store it with a value of 1
    (!counter[chr]) ? counter[chr] = 1 : counter[chr] += 1;
  }
  // set an array to capture odd values
  const odds = [];
  // examine object
  for (const key in counter) {
    // if value is odd push into odds array
    if (counter[key] % 2 !== 0) odds.push(counter[key]);
  }
  // if 2 or more character counts are odd return false
  return (odds.length < 2);
}

// console.log(permPalin('abab')) // => true
// console.log(permPalin('cbaba')) // => true
// console.log(permPalin('cbac')) // => false
// console.log(permPalin('a')) // => true

module.exports = permPalin;
