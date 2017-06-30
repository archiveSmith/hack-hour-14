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

//Bitwise operation - this is o(n) time & o(1) space
// function uniqueNumber(array) {
//   return array.reduce((a,c) => a^=c)
// }

function uniqueNumber(array) {
  let cache = {};
  array.forEach(e => {
    cache[e] ? cache[e] += 1 : cache[e] = 1;
  })
  for (props in cache) {
    if (cache[props] === 1) {
      return props;
    }
  }
}

module.exports = uniqueNumber;
