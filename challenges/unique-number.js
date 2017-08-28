/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */


function uniqueNumber(array) {

    if(array.length % 2 === 0) return undefined; 
    let sorted = array.sort((a,b)=>{
        return a - b; 
    });

    for(let i = 0; i < sorted.length - 1;  i = i + 2){
        if(sorted[i] !== sorted[i+1]){
            return sorted[i]; 
        }
    }
    return array[length-1]

    //create a cache 
    //if number is not in the cache then add it in the cache
    //if the number is already in the cache then delete it in the cache
    //take the keys from the cache and return at 0
    
    


}


module.exports = uniqueNumber;
