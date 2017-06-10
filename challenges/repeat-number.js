/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */


// Solution 1
    // O(n) time
    // O(n) space
// function repeatNumbers(array) {
//     const storage = {};
//     for (let i=0 ; i<array.length ; i++){
//         if (!storage[array[i]]) storage[array[i]] = 1;
//         else return array[i];
//     }
// }

// Solution 2
    // O(n) time
    // O(n) space
function repeatNumbers(array) {
    let dup;
    array.sort((a,b)=>{
        console.log('a -->', a)
        console.log('b -->', b)
        return a-b;
    });
    return array;
}

const array = [1,2,3,4,2]
console.log(repeatNumbers(array));

module.exports = repeatNumbers;
