/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
    let sorted = array.sort((a,b)=> a[0]-b[0]);
    let output= [sorted[0]];
    sorted.forEach((ele) =>{
        if(ele[0]<output[output.length-1][1]){
            if(ele[1]>output[output.length-1][1]){
                output[output.length-1][1]=ele[1];
            }
        }
        else if(ele[0]>output[output.length-1][1]){
            output.push(ele);
        }
        else if(ele[1]>output[output.length-1][1]){
            output[output.length-1][1]=ele[1];
        }
    })
    return output;
}

module.exports = mergeRanges;
