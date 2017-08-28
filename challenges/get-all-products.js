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

//input: array of integers
//output: array of products minus one integer

//loop through the array
//remove one integer
//multiply the remaining
//add that product to the return array

function getAllProducts(array) {

   let output = [];

    for(let i = 0; i < array.length; i++){

        if(i !== array.length-1){
            output.push(array.slice(0, i).concat(array.slice(i+1)).reduce((acc,item)=>acc*item));     
        }
        else{
            output.push(array.slice(0,array.length-1).reduce((acc,item)=>acc*item))
        }
       

    }
    
    return output; 
}

console.log(getAllProducts([1, 7, 3, 4])); 

module.exports = getAllProducts;


// let output = []; 
    
//     if(array.length === 1) return array; 
//     if(!array.length) return [0]; 

//     for(let i = 0; i < array.length; i++){
//         let arr = [];
        
//         console.log(i); 
        
//         if(i < array.length){
//             arr = arr.concat(array.slice(i+1)); 
        
//         }
//         if(i > 0){
//            arr = arr.concat(array.slice(0, i));
        
//         } 

//         let num = arr.reduce((a,b)=> {
//             return a * b; 
//         })
//         output.push(num);
      
      
//     }
//     return output;
