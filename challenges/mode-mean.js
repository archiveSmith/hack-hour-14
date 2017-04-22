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
  let freq = [];
  //calculate average rounding down
  let mean =  Math.floor(array.reduce((acc, next) => acc + next) / array.length);
  //find frequency of each number
  let countedNums = array.reduce((allNums, num) => {
    if (num in allNums) {
      allNums[num]++;
    } else {
      allNums[num] = 1;
    }
    return allNums;
    }, {});
  //store all frequencies
  for (let key in countedNums){
    freq.push(countedNums[key])
    }
  //sort modes to find largest
  let mode = freq.sort((a, b) => b-a)[0]
  //return if mean and mode are equal
  return mean === mode
}

module.exports = modemean;
