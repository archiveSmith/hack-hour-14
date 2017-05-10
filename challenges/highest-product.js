/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array, i = 0, j = 1, k = 2) {
    if(array.length<= 3) return array.reduce((a,c)=>a*c);
    array.sort()
    let maxArray = [];
    while (maxArray.length < 3){
        if (array[0] < 0 && array[1] < 0 && Math.abs(array[1]) > array[array.length-2]){
            maxArray = [array[0], array[1], array[array.length-2]]
        } else {
            maxArray = array.slice(array.length - 3, array.length)
        }
    }
    console.log(array)
    console.log(maxArray)
    return maxArray.reduce((a,c)=>a*c)
}

module.exports = highestProduct;