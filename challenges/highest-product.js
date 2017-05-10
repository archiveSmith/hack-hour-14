
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    // if input isn't long enough
    if (array.length < 3) return "The input contains fewer than 3 values";
    // create a clone, sort, then reverse the input array
    let arr = array.slice().sort().reverse();
    // return the product of the first 3 values
    return arr[0] * arr[1] * arr[2];
}



module.exports = highestProduct;