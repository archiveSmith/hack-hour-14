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
  let mean = Math.floor(array.reduce((a,c) => {
    return a+c
  })/array.length)
  
  let mode = array.reduce((a,c) => {
    if (!a[c]) {
      a[c] = 0
    }
    a[c]+=1
    return a;
  }, {})
  
  let count = 0;
  for (x in mode) {
    if(mode[x] > count) {
      count = x
    }
  }

  return mean === parseInt(count) ? true : false;
}

module.exports = modemean;
