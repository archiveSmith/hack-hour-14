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

  let length = array.length;
  let sum = array.reduce(function(a,c){
    return a+c;
  });
  let mean = sum / length;

  let mode = [];
  let counter = 0;
  let comparison = 0;
  for (var i=0; i<array.length; i++){
    for (var j=0; j<array.length; j++){
      if (array[j]){
        counter ++;
      }
    }
    if (counter > comparison){
      mode.push[array[j]];
    }
  }
  realMode = Math.max(mode)
  if (mean === realMode){
    return true;
  }
  return false;
}

module.exports = modemean;
