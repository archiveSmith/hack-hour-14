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
    let combined = arr1.concat(arr2);
    let swapped;
    do{
        swapped = false;
        for (var i=0; i < combined.length-1; i++) {
            if (combined[i] > combined[i+1]) {
                var temp = combined[i];
                combined[i] = combined[i+1];
                combined[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped)
    return combined

}

module.exports = mergeArrays;