/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 // helper func to get all possible subArrays
 function getSubArrays(arr){
   if (arr.length === 1) return [arr];
   else {
   	subarr = getSubArrays(arr.slice(1));
   	return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
   }
 }

function subsetSum(array, target) {
  let subSets = getSubArrays(array);
  let sums = [];
  // get the sum for each el in each subSet and push to a new array
  subSets.forEach(function (el) {
    let sum = 0;
    for(let i = 0; i < el.length; i++){
      sum += el[i];
    }
    sums.push(sum);
  })
  // compare each sum to the target and return true or false accordingly
  for (let j = 0; j < sums.length; j++) {
    if (sums[j] === target) { return true }
  }
  return false;
}

module.exports = subsetSum;

// console.log(subsetSum([3, 7, 4, 2], 5)) // - > true, 3 + 2 = 5
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
// console.log(subsetSum([8, -2, 1, -3], 6))  //-> true, 8 + 1 + (-3) = 6
