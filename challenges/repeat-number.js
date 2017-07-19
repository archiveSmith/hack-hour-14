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

//O(n^2) solution:
const repeatNumbers = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array.indexOf(array[i + 1]) !== i + 1) return array[i + 1];
  }
}

const arr = [1,2,4,3,1];
console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
