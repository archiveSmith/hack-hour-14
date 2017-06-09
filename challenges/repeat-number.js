/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let duplicate = -1;
  array
  .sort((a,b) => a-b)
  .reduce((acc, el) => {
    acc === el? duplicate = acc : null;
    return el;
  }, 0)
  return duplicate;
}

module.exports = repeatNumbers;
