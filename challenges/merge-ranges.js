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


function sortNumber(x, y) {
  return x[0] - y[0];
}

function mergeRanges(array) {
  if (array.length === 0) {
    return array;
  }
  
  let sortedArray = array.sort(sortNumber);
  
  let newArray = [];
  let range = [sortedArray[0][0]];
  for (let i = 1; i < sortedArray.length - 1; i++) {
    if (sortedArray[i][0] - sortedArray[i-1][0] > 1) {
      range.push(sortedArray[i-1][1]); 
      newArray.push(range);
      range = [sortedArray[i][0]];
    } 
  }
  
  range.push(sortedArray[sortedArray.length - 1][1]);
  newArray.push(range);
  
  return newArray;
}

module.exports = mergeRanges;
