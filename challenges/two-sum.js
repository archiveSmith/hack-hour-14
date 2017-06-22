/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  //check every sum
  for (let i = 0; i < arr.length; i += 1) {
    for (j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

console.log(twoSum([1,2,3,4,5], 7)); //true
console.log(twoSum([1,2,3,4,5], 25)); //false

module.exports = twoSum;
