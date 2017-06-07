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
    let mean; 
    let mode;
    let numCount = {};
    let total = 0;
    for (let index = 0; index < array.length; index++){
        let currNum = array[index];
        total += currNum;
        if (!numCount[currNum]){
            numCount[currNum] = 0;
        }
        numCount[currNum]++;
        if(numCount[currNum] > numCount[mode] || !mode){
            mode = currNum;
        }
    }
    mean = Math.floor(total/array.length);
    return mean === mode;
}

module.exports = modemean;
