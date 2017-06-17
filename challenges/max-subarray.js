/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
//   // generate all combinations of an array
//   let combined = combine(arr, 1);
//   // console.log(combined);
//   // loop through and summate each
//   let sums = [];
//   combined.forEach((el, i) => sums.push(el.reduce((a, b) => { return a + b })))
//   // console.log(sums);
//   // find the max and return i
//   return Math.max.apply(null, sums);
// }
//
//
// // HELPER function from stack
// var combine = function(a, min) {
//     var fn = function(n, src, got, all) {
//         if (n == 0) {
//             if (got.length > 0) {
//                 all[all.length] = got;
//             }
//             return;
//         }
//         for (var j = 0; j < src.length; j++) {
//             fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
//         }
//         return;
//     }
//     var all = [];
//     for (var i = min; i < a.length; i++) {
//         fn(i, a, [], all);
//     }
//     all.push(a);
//     return all;
// }

function maxSubarray(arr) {
  // create some variables to track: sume of our current sub Arr & max val we've found
  let currSum = - Infinity;
  let maxSum = - Infinity;
  // loop through the array looking for contiguous numbers that result in the highest sum
  arr.forEach(el => {
    // calc currSum  if we add a new value does it increase currSum?
    // if so, add it in, otherwise we've moved the start of our sub Array
    currSum = Math.max(el, currSum + el);
    // if we've exceeded our previous max, update it with the new max
    maxSum = Math.max(maxSum, currSum);
  })
return maxSum;
}

module.exports = maxSubarray;

// console.log(maxSubarray([1, 2, 3]));
// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])) // -> 18 from [3, 10, -4, 7, 2]
// console.log(maxSubarray([15,20,-5,10])) //  -> 40
