/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
  let newArr = [];
  let max1 = Math.max(...array);
  array.splice(array.indexOf(max1),1);
  let max2 = Math.max(...array);
  array.splice(array.indexOf(max1),1);
  let max3 = Math.max(...array);
  array.splice(array.indexOf(max1),1);
  newArr.push(max1, max2, max3);
  return newArr.reduce((a,b)=>a*b);
}

module.exports = highestProduct;
//hello hey yo hey