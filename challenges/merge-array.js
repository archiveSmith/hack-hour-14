
//  * We have our lists of orders sorted numerically already, in arrays.
//  * Write a functin to merge our arrays of orders into one sorted array.
//  * These may be of different lengths.
//  *
//  * var my_array = [3,4,6,10,11,15,21];
//  * var another_array = [1,5,8,12,14,19];
//  *
//  * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
//  * 
//  * BONUS: 
//  * Complete in O(n) time and O(n) space 
//  *
//  *

function mergeArrays(arr1, arr2) {
    let i=0, j=0, outArr=[];
    while(i<arr1.length || j<arr2.length){
        if( (j>=arr2.length && i<arr1.length) || arr1[i]<arr2[j]){
            outArr.push(arr1[i]);
            i++;
        }
        else if( (i>=arr1.length && j<arr2.length) || arr1[i]>arr2[j]){
            outArr.push(arr2[j]);
            j++;
        }
    }
    return outArr;
}

module.exports = mergeArrays;