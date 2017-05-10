
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3){
    return "error";
  }

  if (!Array.isArray(array)){
    return "error";
  }
  
  let sorted = array.sort(function(a, b) {
    return a - b;
  });
  
  let product = 1;

  for (let i=sorted.length-1; i>=sorted.length-3; i--){
    product *= sorted[i];
  }
return product;
}


module.exports = highestProduct;