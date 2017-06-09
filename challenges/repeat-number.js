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

const repeatNumbers = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[Math.abs(array[i])] < 0) return -array[i]
    else array[Math.abs(array[i])] = -array[Math.abs(array[i])]
  }
}

module.exports = repeatNumbers
