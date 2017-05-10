
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
	array.sort((a,b) => a-b)
  let a = array[array.length-1];
  let b = array[array.length-2];
  let c = array[array.length-3];
  let newArr = [a,b,c];
  return newArr.reduce((a,c) => a * c);
}

module.exports = highestProduct;