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


function mergeRanges(arr) {
    let out = [arr[0]];
    for(let i=1; i<arr.length; i++){
            console.log('..............')
            console.log('arr['+i+']: ',arr[i])
        for(let j=0; j<out.length; j++){
            console.log('out: ', out)
            if( arr[i][0] > out[j][1] || arr[i][1] < out[0] ) {
                console.log('>> no overlap');
                out.push(arr[j])
            }
            else{
                console.log('>> overlap')
                out[j][0] = Math.min(out[j].concat(arr[i]));
                out[j][1] = Math.max(out[j].concat(arr[i]));
            }
        }
    }
    return out;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

console.log(mergeRanges(times)); //[[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
