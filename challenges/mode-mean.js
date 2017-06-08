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
  let modeList = {};
  let mode = 0;
  let highest = 0;
  sortedArray = array.sort();

  let sum = sortedArray.reduce((acc, value) => {
    if (modeList[value] === undefined) {
      modeList[value] = 1;
    }
    else {
      modeList[value]++;
    }
    if (modeList[value] >= highest) {
      highest = modeList[value];
      mode = value;
    }
    return acc += value;
  }, 0);

  let mean = Math.floor(sum/sortedArray.length);

  return mode === mean;
}

module.exports = modemean;
