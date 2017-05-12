/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// function highestProduct(array) {
//   let positive = [];
//   let negative = [];
//
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > 0) positive.push(array[i]);
//     else if (array[i] < 0) negative.push(array[i]);
//   }
//   console.log(positive);
//   let maxPos = [];
//   for (let i = 0; i < 3; i += 1) {
//     let currMax = Math.max(...positive);
//     maxPos.push(currMax);
//     positive.splice(positive.indexOf(maxPos[i], 1));
//   }
//   console.log(maxPos);
// }

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
  // verify that the array contains at least three values
  if (array.length < 3) return 0;
  // sort the array
  array = array.sort((low, high) => (low - high));
  // if the highest value is negative, handle all negative array
  if (array[array.length - 1] < 0) {
    // all we have to do is multiply the highest values
    return array.splice(-3).reduce((acc, curr) => acc * curr);
  }
  // get the highest value in the array, we'll definitely use that
  const highestNum = array[array.length-1];
  // Check the lowest two values (to account for neg * neg)
  let lowProduct = array[0] * array[1];
  // Now get the sum of the two lowest of the top three numbers
  let highProduct = array[array.length - 3] * array[array.length - 2];
  // return whichever is higher
  return (lowProduct > highProduct) ? lowProduct * highestNum : highProduct * highestNum;
}

console.log(highestProduct([-5, -1, 1, 2, 3])); //should return 15
//console.log(highestProduct([-5, -4, -3, -2, -1])); // should return -6

module.exports = highestProduct;
