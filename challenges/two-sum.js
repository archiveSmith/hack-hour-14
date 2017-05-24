/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
function twoSum(arr, n) {
    for(let i=1; i< arr.length;i++){
        if(arr.slice(i,array.length).indexOf(n-arr.slice(i-1,i)[0])!==-1)
        return true
    }
    return false;
}
module.exports = twoSum;