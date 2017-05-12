/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) { return 0; }
  array.sort((a, b) => { return a - b; });
  if (array[array.length - 1] < 0) {
    const bigThree = array.slice(array.length - 3);
    // console.log(bigThree);
    return bigThree.reduce((acc, val) => {
      return acc * val;
    });
  }
  const highestNumber = array[array.length - 1];
  const lowProduct = array[0] * array[1];
  const highProduct = array[array.length - 2] * array[array.length - 3];
  return (lowProduct > highProduct) ? lowProduct * highestNumber : highProduct * highestNumber;
}

// fix to take into account negative numbers

// console.log(highestProduct([-1, -5, 1, 2]));

module.exports = highestProduct;
