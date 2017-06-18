/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return array.sort(function(a,b){
    return b - a; 
  }).slice(0,3).reduce(function(all,item){
    return all * item; 
  });
}


module.exports = highestProduct;

