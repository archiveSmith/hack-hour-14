/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
<<<<<<< HEAD
    if(!array.length) return 0;
    if(array.length < 3) {
      return array.reduce((acc, el)=>{
        return acc * el;
      }, 1)
    }
    
    array.sort((a,b) => b-a);
    return array[0] * array[1] * array[2];
=======

>>>>>>> c4f344d6fc53288e9ce1210315367f0c6dea1718
}


module.exports = highestProduct;
