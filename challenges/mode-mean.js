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

  let mean = 0;
  let modeArr = [];
  let max = 0;
  
  let mode = array.reduce((a,b) =>{
    mean += b;
    if(a[b]) a[b]++;
    else a[b] = 1;
    return a;
  },{})
  
  for(number in mode){
    if(mode[number] > max) max = mode[number];
  }
  
  for(number in mode){
    if(mode[number] === max) modeArr.push(+number);
  }
  
  mean = mean / array.length;

  return Math.max.apply(null,modeArr) === Math.floor(mean);

}

module.exports = modemean;
