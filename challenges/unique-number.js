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
    let cache = {}
    array.forEach((el)=>{
        if(!cache[el]) {
            cache[el] = 1;
        }else {
            cache[el] += 1;
        }
    })
    for (k in cache) {
        if(cache[k] === 1) {
            return +k;
        }
    }
}

//use xor and reduce
const uniqueNumber2 = (array) => {
    return array.reduce((acc, number) => {
        return acc ^ number;
    }, 0)
}
module.exports = uniqueNumber;
