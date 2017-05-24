/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
function twoSum(arr, n, i = 0) {
    //take out the first value out of the array;
    if (i === arr.length) return false;
    let value1 = arr[i]
    newArray = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
    let output = newArray.reduce((eval, value2) => {
        if (eval === false) {
            return value1 + value2 === n ? true : false;
        } else {
            return true
        }
    }, false)

    if (output === false) return twoSum(arr, n, ++i);

    return output;
}

test1 = [1,3,13,5,7,4,6,11]

console.log(twoSum(test1, 20));

module.exports = twoSum;