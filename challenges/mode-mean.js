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
    // determine mean
    sum = array.reduce((acc,curr)=>acc+curr);
    mean = Math.floor(sum/array.length);

    // return mean
    meanObj = array.reduce((acc,curr)=>{
        acc[curr] = acc[curr] + 1 || 1
        return acc
    },{})

    numbers = Object.keys(meanObj);
    values = Object.values(meanObj);
    maxValue = values.reduce((max,curr)=>Math.max(max,curr));
    mode = numbers[values.indexOf(maxValue)]
    console.log(mode)

    //determine if they're equal
    return (mean == mode)
}

module.exports = modemean;
