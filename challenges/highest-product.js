/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {

  if (array.length < 3) {
    return undefined
  }

  array.sort(function(a, b) {
    return b - a
  })

  let maxProd = (array[0] * array[1] * array[2])
  let maxMinProd = (array[0] * array[array.length - 1] * array[array.length - 2])

  maxProd > maxMinProd ? maxProd : maxMinProd

}


module.exports = highestProduct;
