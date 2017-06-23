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
    let output = [];
    array.forEach(function (e, i, a) {
        let acc = 1;
        let arr = array.slice();
        arr.splice(i, 1);
        arr.forEach((ele)=>{acc*=ele});
        output.push(acc);
    });
    if(output.length>0)
    return output;
    return 0;
}

module.exports = getAllProducts;
