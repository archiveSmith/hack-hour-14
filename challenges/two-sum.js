/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
function twoSum(arr, n) {
  let val = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (val[arr[i]]) {
      return true;
    }
    else {
      let difference = n-arr[i];
      val[difference] = true;
    }
  }
  
  return false;
}
module.exports = twoSum;