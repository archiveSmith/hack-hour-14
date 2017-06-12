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
    return -1*array.reduce( (leftover, curr) => leftover-curr, (array.length-1+(array.length-1)*(array.length-1))/2 );
}

module.exports = repeatNumbers;