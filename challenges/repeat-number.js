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
  // edge cases
  // if array is not an array or too short return invalid input
  if (!Array.isArray(array) || array.length < 2) return 'invalid input';
  // loop through array and store values in a temp array
  const temp = [array[0]];
  for (let i = 1; i < array.length; i += 1) {
    // if temp array has the value return it else push it to the temp array
    if (temp.includes(array[i])) return array[i];
    temp.push(array[i]);
  }
}

// Alyssa's answer - TO STUDY
// function repeatNumbers(array) {
//  return -1*array.reduce( (leftover, curr) => leftover-curr, (array.length-1+(array.length-1)*(array.length-1))/2 );
// }

module.exports = repeatNumbers;

// console.log(repeatNumbers(1));
// console.log(repeatNumbers([1]));
// console.log(repeatNumbers([1,3,6,7,4,2,1]));
