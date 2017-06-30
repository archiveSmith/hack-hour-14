/**
 * Write a function mergeRanges that takes an array of meeting time ranges
 * and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


const mergeRanges = (array) => {

}

const isInRange = (range, number) => number > range[0] && number < range[1]

const mergeTwoRanges = (range1, range2) => {
  if (isInRange(range1, range2[0])) {
    return [[range1[0], range2[1]]]
  } else {
    return [range1, range2]
  }
}

module.exports = mergeRanges;
