/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */
function twoSum(arr, n) {
  if (!Array.isArray(arr) || n === undefined) return 'invalid input';
  const sums = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      sums.push(arr[i] + arr[j]);
    }
  }
  return sums.includes(n);
}

module.exports = twoSum;
