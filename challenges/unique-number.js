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

 // time complexity O(n)
 // space complexity O(1) after deletions
function uniqueNumber(array) {
  // create cache to store values
  const cache = {};
  // loop
  array.forEach((el) => {
    if (cache[el]) {
      // if in cache delete
      delete cache[el];
    } else {
      // if not in cache store in cache as a unique value
      cache[el] = 'uniq';
    }
  });
  // return only remaining key in cache
  return Object.keys(cache)[0];
}

// console.log(uniqueNumber([1,2,1,3,3]))

module.exports = uniqueNumber;
