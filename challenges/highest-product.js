/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
    const sorted = array.sort((a,b) => b - a);

    return sorted[0] * sorted[1] * sorted[2];
}


console.log(highestProduct([1,2,3,4,5,6]));
console.log(highestProduct([5,1,2,3]));
console.log(highestProduct([4,8,4,2]));
console.log(highestProduct([3,7,1,9]));
module.exports = highestProduct;