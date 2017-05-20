/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {

  var sets = [[]];

  // generate the power set and for each new set
  // check if the temporary sum equals our sum above
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      let temp = sets[j].concat(arr[i]);
      sets.push(temp);
      let sum = temp.reduce(function(a, c) { return a + c; });
      if (sum === target) return true; 
    }
  }
  
  return false;
}


function subsetSum(array, target) {
  if (!target) return true;
  if (!array.length) return false;
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
}


module.exports = subsetSum;
