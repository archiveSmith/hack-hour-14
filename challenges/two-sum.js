/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
function twoSum(arr, n) {
  if(arr.length === 1) {
    return false;
  }

  n = n - arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (n - arr[i] === 0)
      return true;
  }

  return false || twoSum(arr.slice(1), n);
}


console.log(twoSum(
  [-2,6,2],
  4
))

module.exports = twoSum;