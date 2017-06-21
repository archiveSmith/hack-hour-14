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
function sortArray(a, b){
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function mergeRanges(array) {
    let sortedArray = array.sort(sortArray);
    for(let i=0;i<sortedArray.length;i++){
        for(let j=0;j<sortedArray[i].length;j++){
            console.log('how many times')
            if(sortedArray[i+1]){
                if(sortedArray[i][1]>=sortedArray[i+1][0] ){
                    sortedArray[i][1]=sortedArray[i+1][1];
                    sortedArray.splice(i+1, 1)
                }
            }
        }
    }
    console.log(sortedArray)
}


mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])
module.exports = mergeRanges;
