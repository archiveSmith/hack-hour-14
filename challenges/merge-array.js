/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
    if (arr1 instanceof Array && arr2 instanceof Array){
        let arr= [];
        while (arr1.length > 0 && arr2.length > 0) {
            if (arr1.length > 0 && arr2.length > 0) {
                if (arr1[0] > arr2[0])
                    arr.push(arr2.shift());
                else
                    arr.push(arr1.shift());
            }
            if( arr1.length === 0){
                arr = arr.concat(arr2);
                arr2 = [];
            }
            if ( arr2.length === 0) {
                arr = arr.concat(arr1);
                arr1 = [];
            }
        }
        return arr;
    }
    else
        return 0;
}

module.exports = mergeArrays;