
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
    let returnArr = array.sort();
    let value = 1;
    for(let i =returnArr.length-1; i>=0 && i>=returnArr.length-3; i--){
    value = value*returnArr[i];
    }
    return value;
}
module.exports = highestProduct;