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
   let sum = 0;
   let modeList = {};
   let mode = 0;
   let highest = 0;

   sortedArray = array.sort();
   for (let i = 0; i < sortedArray.length; i++) {
     let value = sortedArray[i];
     sum += value;
     if (modeList[value] === undefined) {
       modeList[value] = 1;
     }
     else {
       modeList[value]++;
     }
     if (modeList[value] >= highest) {
       mode = value;
     }
   }

   let mean = Math.floor(sum/sortedArray.length);

   return mode === mean;
 }

module.exports = modemean;
