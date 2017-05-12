
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return array.sort((a,b) => a-b).slice(-3).reduce((a,c) => a * c);
}

module.exports = highestProduct;


function highestProduct(array) {
  if (array.length < 3) return 0;
  
  array = array.sort((low,high) => low-high);
  if (array[array.length - 1] < 0) {
    return array.splice(-3).reduce((acc,curr) => acc * curr);
  }
  
  const highestNum = array[array.length-1];
  let lowProduct = array[0] * array[1];
  let highProduct = array[array.length-3] * array[array.length-2];
  return (lowProduct > highProduct) ? lowProduct * highProduct : highProduct * highestNum;
}