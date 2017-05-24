/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= n) {
      let test = arr.slice(0, i).concat(arr.slice(i+1))
      if (test.includes(n - arr[i])) {
        return true
      }
    }
  }
  return false
}

module.exports = twoSum
