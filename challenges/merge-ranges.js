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

  array.sort((a,b) => {
    //if first item in both arrays is the same, sort them according to last item
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0]
  });

  for (let i = 1; i < array.length; i += 1) {

    const curr = array[i];
    const prev = array[i - 1];
    const next = array[i + 1];

    //check for encapsulated times
    if (next && next[0] >= prev[0] && next[next.length - 1] <= curr[curr.length - 1]) array.splice(i + 1, 1);

    //if first item in curr <= last item in prev, merge them
    if (curr[0] <= prev[prev.length - 1]) {
      const merged = prev.concat(curr);
      // sort merged and splice out all values except for first and last
      merged.sort((a,b) => a - b).splice(1, merged.length - 2);
      //splice out two overlapping arrays and insert merged array
      array.splice(i - 1, 2, merged);
      //decrement i (since we replaced two overlapping arrays with one merged array)
      i -= 1;
    }
  }
  return array;
}

var times = [[9, 10], [3, 5], [6, 7], [4, 8], [0, 2], [0,1], [10,11], [10, 12], [0,12]];

console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
