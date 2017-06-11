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
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0]
  });

  console.log(sorted);
  for (let i = 1; i < sorted.length; i += 1) {
    // console.log(i)

    const curr = sorted[i];
    const prev = sorted[i - 1];
    const next = sorted[i + 1];

    console.log('curr', curr);
    console.log('prev', prev)
    console.log('next', next)

    if (next && next[0] >= prev[0] && next[next.length - 1] <= curr[curr.length - 1]) sorted.splice(i + 1, 1);

    if (curr && curr[0] <= prev[prev.length - 1]) {
      const merged = prev.concat(curr);
      merged.sort((a,b) => a - b);
      merged.splice(1, merged.length - 2);
      console.log('merge', merged);
      sorted.splice(i - 1, 2, merged);
      console.log('sorted',sorted);
      i -= 1;
    }
  }
  return sorted;
}

var times = [[9, 10], [3, 5], [6, 7], [4, 8], [0, 2], [0,1], [10,11], [10, 12], [0,12]];

console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
