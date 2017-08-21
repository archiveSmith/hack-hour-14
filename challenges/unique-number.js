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
  const cache = {};
  for (let i = 0; i < array.length; i += 1) {
    if (!cache[array[i]]) cache[array[i]] = [];
    cache[array[i]].push(array[i]);
  }

  for (let key in cache) {
    if (cache[key].length === 1) return cache[key][0];
  }

  // for (let i = 0; i < array.length; i += 1) {
  //   if (!cache[array[i]]) cache[array[i]] = array[i];
  //   else delete cache[array[i]];
  // }
  //
  // return cache;

}

console.log(uniqueNumber([1,2,2,3,3,4,4]));

module.exports = uniqueNumber;
