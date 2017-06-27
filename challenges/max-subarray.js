/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

<<<<<<< HEAD
  function maxSubarray(array) {
    let currentMax = 0;
    let max = 0;
    for (let i = 0; i < array.length; i += 1) {
      currentMax = Math.max(0, currentMax + array[i]);
      max = Math.max(max, currentMax);
    }
    return max;
  }

  console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
=======
function maxSubarray(arr) {

}
>>>>>>> bd5b3654e432d61400e1b31aee840b65a3e169cf

module.exports = maxSubarray;
