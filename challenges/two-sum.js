/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if (!(arr instanceof Array) || typeof n !== "number") return false;
    const cache = {};
    for (let index = 0; index < arr.length; index++) {
        for (let jndex = 0; jndex < arr.length; jndex++) {
            if (index !== jndex)
                cache[arr[jndex] + arr[index]] = arr[jndex] + arr[index];
        }
    }
    return !!cache[n];
}


module.exports = twoSum;