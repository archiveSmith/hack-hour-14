/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

// Create an empty object to hold the values needed to sum to n
// Loop through the array
// The values we are searching for are n - arr[i]
// If the value being checked fits, return true
// Else, add the current value as a property
// If loop finishes without matches, return false

function twoSum(arr, n) {
  let obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (obj[n - arr[i]]) return true;
    obj[arr[i]] = 1;
  }
  return false;
}

module.exports = twoSum;