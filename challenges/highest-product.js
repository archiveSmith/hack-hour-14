
/*
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
  let prodArr = [];
  if (array.length < 3) return 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array.indexOf(array[j+1]) > -1){
      prodArr.push(array[i] * array[j] * array[j+1]);
      }
    }
  }
  return prodArr.reduce(function (acc, curr) {
    if (acc < curr) {
      return acc = curr;
    }
  }, 0);
}

module.exports = highestProduct;
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

}


module.exports = highestProduct;
