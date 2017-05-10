/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => {
    return a - b;
  });
  const bigThree = array.slice(array.length - 3);
  console.log(bigThree);
  return bigThree.reduce((acc, val) => {
    return acc * val;
  });
}

// fix to take into account negative numbers

console.log(highestProduct([-1, -2, 1, -3]));

module.exports = highestProduct;
