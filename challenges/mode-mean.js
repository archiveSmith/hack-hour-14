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

const modemean = (array) => {
  //calculate mean
  const getMean = (array) => {
    const sum = array.reduce((a, c) => a + c);
    return Math.floor(sum / array.length);
  }

  //create cache using reduce()
  const createCache = (array) => {
    return array.reduce((cache, curr) => {

      if (cache[curr]) cache[curr] += 1;
      else cache[curr] = 1;
      return cache;
    }, {});
  }

  //calculate mode
  const getMode = () => {
    let mode;
    let max = -Infinity;
    //loop through cache object using Object.keys() and forEach() (to avoid looping through props inherited from prototypes)
    Object.keys(cache).forEach(key => {
      //if current cached value > current max value, assign it to max
      //set mode to current key
      if (cache[key] > max) {
        max = cache[key];
        mode = key;
      }
      //if there are multiple modes, use the Math.max() of the modes
      if (cache[key] === max) mode = Math.max(mode, key);
    });
    return mode;
  }

  const mean = getMean(array);
  const cache = createCache(array);
  const mode = getMode();
  return mode === mean;
}

console.log(modemean([1, 2, 2, 3]));

module.exports = modemean;
