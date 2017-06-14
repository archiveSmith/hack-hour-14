/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

    function addList (list) {
        let sum = 0;
        while (list.length !== 0)
            sum += list.pop();
        return sum;
    }

    const cache = {};
    if (arr.length === 1) return arr[0];
    for (let index = 0; index < arr.length; index++){
        for (let jndex = index+1; jndex < arr.length+1; jndex++) {
            const sum = addList(arr.slice(index,jndex+1));
            cache[sum] = arr.slice(index,jndex+1);
        }
    }
    return cache[Math.max(...Object.keys(cache).map((str)=>{
        return parseInt(str);
    }))];
}

module.exports = maxSubarray;
