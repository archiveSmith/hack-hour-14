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
  array = array.sort();
  let sum = 0;
  let modeMap = {};
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
    if (modeMap[array[i]]) {
      modeMap[array[i]] = modeMap[array[i]] + 1
    } else {
      modeMap[array[i]] = 1;
    }
  }
  let mode = 0
  for (prop in modeMap) {
    if (modeMap[prop] > mode)
      mode = prop;
  }
  let mean = Math.floor(sum / array.length)
  console.log(modeMap);
  console.log(mode);
  console.log(mean);
  if (mean == mode) {
    return true
  } else {
    return false
  }
}


modemean([2, 2, 2, 1, 3])

module.exports = modemean;
