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

// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2).sort((a,b) => a-b);
// }

mergeArrays(my_array, another_array)

function mergeArrays(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return insertionSort(newArr);
}

function insertionSort(array) {
  for (let index = 1; index < array.length; index++) {
    for (let prevIndex = index - 1, curIndex = index; prevIndex >= 0; prevIndex--, curIndex--) {
      if (array[curIndex] < array[prevIndex]) {
        let temp = array[curIndex];
        array[curIndex] = array[prevIndex];
        array[prevIndex] = temp;
      }
      else {
        break;
      }
    }
  }
  return array;
}

module.exports = mergeArrays;