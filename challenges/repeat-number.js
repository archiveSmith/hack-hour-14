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
  const nums = {};

  for (let i = 0; i < array.length; i++) {
    if (nums[array[i]])
      return array[i];

      nums[array[i]] = true;
  }

  console.log(nums);
}

console.log(repeatNumbers([0,1,2,2,3,4]));

module.exports = repeatNumbers;
