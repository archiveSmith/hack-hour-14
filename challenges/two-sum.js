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

//optimized:
// function twoSum(arr, n) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i += 1) {
//     if (obj[n - arr[i]]) return true;
//     obj[arr[i]] = 1;
//   }
//   return false;
// }

console.log(twoSum([1,2,3,4,5], 7)); //true
console.log(twoSum([1,2,3,4,5], 25)); //false

module.exports = twoSum;
