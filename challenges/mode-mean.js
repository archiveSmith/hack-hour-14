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
    let objCount = {};
    let mode = array[0];
    let total = array.reduce( (tot, num) => {
        if(!objCount[num])
            objCount[num]=1;
        else
            objCount[num]++;
        if( objCount[num]>objCount[mode] || (objCount[num]===objCount[mode] && num>mode) )
            mode = num;
        return tot+num;
    },0)
    let mean = Math.floor(total/array.length);
    return mean===mode;
}

module.exports = modemean;
