/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

//NOT FINISHED
function mergeRanges(array) {
  array.sort((a,b) => {
    console.log('0',a[0], b[0]) 
    console.log('1', a[1], b[1])
    return a[0]-b[0] || a[1]-b[1]
  });
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (!arr.length || array[0] > arr[arr.length-1][1]) {
      arr.push(array[i])
    } else {
      arr[arr.length-1][1] = array[1]
    }
  }
  return arr;
}

module.exports = mergeRanges;
