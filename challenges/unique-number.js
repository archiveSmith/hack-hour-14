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
//only appears once
//sort them
//if the next number is not the same as the previous then it is the once numer
function uniqueNumber(array) {
    let sorted = array.sort((a,b)=>{
        return a - b; 
    });

    for(let i = 0; i < sorted.length - 1;  i = i + 2){
        if(sorted[i] !== sorted[i+1]){
            return sorted[i]; 
        }
    }
    return undefined; 
}

console.log(uniqueNumber([1,2,1,3,3]))

module.exports = uniqueNumber;
