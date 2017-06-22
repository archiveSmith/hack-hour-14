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
  if (array.length === 0) return [0];
  const products = [];
  // generate all unique combinations of an array
  let combinations = combine(array, array.length - 1);
  combinations = combinations.filter((el) => {
    return el.length === array.length - 1 })
  // console.log(combinations);

  // get the product of each and return that array
  combinations.forEach((el, i) => {
    el = el.reduce((acc, val) => {return acc * val})
    products.push(el);
  });
  return products
}

// helper from slack
function combine(arr, min) {
    var combis = [];
    for (let i = min; i < arr.length; i += 1) {
        fn(i, arr, [], combis);
    }
    combis.push(arr);
    return combis;
}

function fn(n, src, got, all) {
    if (n === 0) {
        if (got.length > 0) {
            all[all.length] = got;
        }
        return;
    }
    for (var j = 0; j < src.length; j++) {
        fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
}

// console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;
