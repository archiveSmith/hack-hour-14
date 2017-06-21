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
  // create cach to store values
  const cache = {}
  // loop
  array.forEach((el) => {
    if (cache[el]) {
      // if in cache note that it's repeated
      cache[el] = 'repeated';
    } else {
      // if not in cache store note that it has appeared once
      cache[el] = 'once';
    }
  })
  // loop through cache and find the value the value that is not repeated
  for (let key in cache) {
    if (cache[key] === 'once') return key;
  }
}

// console.log(uniqueNumber([1,2,1,3,3]))

module.exports = uniqueNumber;
