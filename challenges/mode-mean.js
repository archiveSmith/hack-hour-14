/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  
     //if array is filled with the same element
     if ([...new Set(array)].length === 1) return true

     //calculate the mean
     let mean = Math.floor(array.reduce((acc, val) => {
       return acc + val; }, 0)/ array.length);

     //count frequency of all numbers in array
     let countedNums = array.reduce((allNums, num) => {
       if (num in allNums) {
         allNums[num]++;
       } else {
         allNums[num] = 1;
       }
       return allNums;
       }, {});

     //find mode by sorting countedNums object by property
     let mode = Object.entries(countedNums).sort((a, b) => b[1] - a[1])[0][0]

     //check if mean and mode are equal
     return mean === mode
}

module.exports = modemean;
