/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time and O(n) space
 *
 */

function mergeArrays(arr1, arr2) {
  const merged = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) merged.push(arr1.shift());
    else merged.push(arr2.shift());
    }
  return merged.concat(arr1, arr2);
}

// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2).sort((low, high) => {
//     return low - high;
//   })
// }

let arr1 = [6,10,11,15, 21];
let arr2 = [1,5,8,12,14,19];
console.log(mergeArrays(arr1, arr2));

module.exports = mergeArrays;
