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
  const mean = Math.floor((array.reduce((a, c) => {
    return a + c;
  })) / array.length);

  let cache = {};
  array.forEach((item) => {
    if (cache.hasOwnProperty(item)) cache[item] += 1;
    else cache[item] = 1;
  });
  let mode;
  let maxVal = 0;
  for (prop in cache) {
    if (maxVal < cache[prop]) {
      maxVal = cache[prop];
      mode = prop;
    }
    if (maxVal === cache[prop]) {
      mode = Math.max(mode, prop);
    }
  }
  return mode === mean ? true : false;
}

console.log(modemean([13, 13, 14, 14, 15, 15]));

module.exports = modemean;
