/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  if (array.length === 1) return array[0]
  let numCount = array.reduce(function(prev, curr) {
    if (prev[curr]) prev[curr]++
    else
      prev[curr] = 1
    return prev
  }, {})

  for (let key in numCount) {
    if (numCount[key] === 1) return key

  }
}

module.exports = uniqueNumber;
