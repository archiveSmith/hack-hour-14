/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

const subsetSum = (arr, target) => {
  //base case:
  //every array has [] as a subset and sum of [] === 0
  //so we know if target === 0, we can return true
  if (target === 0) return true;
  //we also know we can never hit target with [] (if target is not 0)
  //so if arr is empty, we can return false
  if (!arr.length) return false;
  //make two recursive calls to subsetSum(), one that counts arr[0] and one that doesn't
  return subsetSum(arr.slice(1), target - arr[0]) || subsetSum(arr.slice(1), target);
}

console.log(subsetSum([-2, 5, 20], 18)); //-> return true
console.log(subsetSum([3, 7, 4, 2], 5)); //- > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); //-> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)); //-> false
console.log(subsetSum([8, -2, 1, -3], 6)); //-> true, 8 + 1 + (-3) = 6







// function subsetSum(array, target) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === target) return true;
//     else if (array[i] < target) {
//       var newArray = array.slice(i+1);
//       if (subsetSum(newArray, target - array[i])) return true;
//     }
//   }
//   return false;
// }

// function subsetSum(array, target) {
//   if (target === 0) return true;
//   if (!array.length) return false;
//   return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
// }


module.exports = subsetSum;
