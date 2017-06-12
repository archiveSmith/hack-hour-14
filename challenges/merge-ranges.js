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


function mergeRanges(array) {
  // loop through and push all the values into a new array
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    array[i].forEach(el => newArr.push(el));
  }
  // sort the new array
  newArr.sort((a, b) => { return a - b });
  // console.log(newArr);
  // split back into arrays of two elements
  const sorted = [];
  while (newArr.length > 0) {
    sorted.push(newArr.splice(0, 2));
  }
  // console.log(sorted);
  // loop through sorted array and compare values
  const merged = [];
  for (let j = 0; j < sorted.length - 1; j += 1) {
    if (sorted[j][1] + 1 !== sorted[j + 1][0] && sorted[j][1] !== sorted[j + 1][0]) {
      merged.push(sorted[j]); }
    else { merged.push([sorted[j][0], sorted[j + 1][1]]); j += 1; }
  }
  return merged;
}

module.exports = mergeRanges;

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

// console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]
