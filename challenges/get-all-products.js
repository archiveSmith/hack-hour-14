/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  console.log(array);
  // if (!array.length) return [0];
  // const results = [];
  // for (let i = 0; i < array.length; i += 1) {
  //   const temp = [];
  //   for (let j = 0; j < array.length; j += 1) {
  //     if (j !== i) temp.push(array[j]);
  //   }
  //   results.push(temp.reduce((a,c) => a * c));
  // }
  // return results;
}

console.log(getAllProducts([1, 7, 3, 4])); //->  [84, 12, 28, 21]
// console.log(getAllProducts([]));

module.exports = getAllProducts;
