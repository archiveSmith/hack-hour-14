<<<<<<< HEAD

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
    if(array.length < 3){
        return 'array must be at least three';
    }
    array.sort((a,b)=>(b-a));
    if(isNaN(array[0]) || isNaN(array[1]) || isNaN(array[2]) ){
        return 'array must be of numbers';
    }
    if(array.length > 5 && !isNaN(array[array.length-2]) && !isNaN(array[array.length-1])){
        return array[0]*array[array.length-2]*array[array.length-1];
    }
    return array[0]*array[1]*array[2];
}
module.exports = highestProduct;
=======
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

}


module.exports = highestProduct;
>>>>>>> c4f344d6fc53288e9ce1210315367f0c6dea1718
