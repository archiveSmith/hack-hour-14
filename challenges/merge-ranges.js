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
  //first item in array must be bigger than last item in prev array
  //sort nested arrays
  //loop through array
  //if first item in array[i] < last item in array[i - 1], merge those two arrays
  //else keep looping

  const sorted = array.sort((a,b) => {
    return a[0] - b[0];
  });

  for (let i = 1; i < sorted.length; i += 1) {

    const curr = sorted[i];
    const prev = sorted[i - 1];
    // console.log('curr', curr);
    // console.log('prev', prev);

    if (curr[0] <= prev[prev.length - 1]) {
      const merged = prev.concat(curr);
      merged.splice(1, merged.length - 2);
      // console.log('merged', merged);
      sorted.splice(i - 1, 2, merged);
      // console.log('sorted', sorted);
    }
  }
  return sorted;
}

var times = [[9, 10], [3, 5], [4, 8], [0, 1], [10, 12]]

console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
