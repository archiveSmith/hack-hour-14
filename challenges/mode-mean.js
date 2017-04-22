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
   let freq = []
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

   for (let key in countedNums){
     freq.push([key, countedNums[key]])
   }


   //NODE DOESNT RUN OBJECT.ENTRIES
   //find mode by sorting countedNums object by property
   let mode = parseInt(freq.sort(function(a,b){return b[1] - a[1]})[0][0])
   console.log(mean, mode)
   //check if mean and mode are equal
   return mean === mode
}

console.log(modemean([2,1,4,5,6,7,8,8,8,8,8,8,8,8]))

module.exports = modemean;
