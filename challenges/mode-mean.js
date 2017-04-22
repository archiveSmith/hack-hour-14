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
function mean(array){
	return Math.floor(array.reduce((a,b)=> a+b)/array.length);
}

function mode(array){
  let count = 1;
  let obj = {};
  for(i=0; i < array.length; i++){
    if(obj[array[i]]){
      obj[array[i]]+= count
    }else{
      obj[array[i]] = 1
    }
  }
  return Math.max(...Object.values(obj))
}

function modemean(array) {
  console.log(mode(array))
  console.log(mean(array))
return mode(array)===mean(array)

}

module.exports = modemean;
