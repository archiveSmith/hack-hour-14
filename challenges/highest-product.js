
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
    if(array.length < 3) return 'array must be at least three';
    array.sort((a,b)=>(b-a));
    console.log(array);
    if(isNaN(array[0]) || isNaN(array[1]) || isNaN(array[2]) ) return 'array must be of numbers';
    if(array.length > 5 && !isNaN(array[array.length-2]) && !isNaN(array[array.length-1])){
        return array[0]*array[array.length-2]*array[array.length-1];
    }
    return array[0]*array[1]*array[2];
}
// module.exports = highestProduct;
console.log(highestProduct([-98,-100,324,123,231,1,1,4,]));