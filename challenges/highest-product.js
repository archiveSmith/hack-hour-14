/**
 * Given an array of integers, 
 * find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return (array.length) ? array.sort((a, b) => b - a).slice(0, 3).reduce((a, c) => a * c) 
  : false;
}

module.exports = highestProduct;