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
    let schedule = [array[0]];

    // loop over input array to either push the meeting to the schedule OR extend an existing meeting
    for (let i=0 ; i<array.length ; i++){
        // loop over schedule array to check if the meeting time overlaps with other meeting times
        for (let j=0 ; j<schedule.length ; j++){
            // check if start time is inside of another meeting --> change the ending time if new one is later
            if (array[i][0] >= schedule[j][0] && array[i][0] <= schedule[j][1]) {
                schedule[j][1] = Math.max(array[i][1], schedule[j][1]);
                console.log('array[i] -->', array[i])
                console.log('schedule -->', schedule)
                break
            }
            // check if end time is inside of another meeting --> change the start time if new one is earlier
            if (array[i][1] >= schedule[j][0] && array[i][1] <= schedule[j][1]){
                schedule[j][0] = Math.min(array[i][0], schedule[j][0]);
                console.log('array[i] -->', array[i])
                console.log('schedule -->', schedule)
                break
            }
            // if no overlap, push the new meeting time to the schedule
            else schedule.push(array[i]);
        }
    }
    return schedule;
}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log('final output -->', mergeRanges(times));    //-> [[0, 1], [3, 8], [9, 12]]


module.exports = mergeRanges;
