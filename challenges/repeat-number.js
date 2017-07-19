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

//O(n) time and 0(1) space complexity using n * (n + 1) / 2
const repeatNumbers = (array) => {
  //edge case:
  if (!array) return;
  //since we know array[0] === 1, each step += 1, and a number is repeated in the sequence
  //we know the max value in array will be array.length - 1
  const maxVal = array.length - 1;
  //calculate the expected sum using n * (n + 1) / 2 formula
  const expectedSum = maxVal * (maxVal + 1) / 2;
  //calculate the actual sum
  const actualSum = array.reduce((a,c) => a + c);
  //return difference
  return actualSum - expectedSum;
}

//O(n^2) solution:
// const repeatNumbers = (array) => {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array.indexOf(array[i + 1]) !== i + 1) return array[i + 1];
//   }
// }

const arr = [1,2,4,3,1];
console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
