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
    const mean = array.reduce((acc, num) => {
        return acc += num;
    }, 0) / array.length; // average of numbers
    const modeIndex = array.length / 2;
    const hasTwoModes = Number.isInteger(modeIndex);
    const mode = hasTwoModes // middle number
                ? Math.max(array[modeIndex], array[modeIndex - 1])
                : array[Math.floor(modeIndex)];

    return Math.floor(mean) === mode;
}

// console.log('SHOULD BE TRUE : ' + modemean([1,2,5,9,10]));
// console.log('SHOULD BE FALSE : ' + modemean([1,2,6,9,10]));
// console.log('SHOULD BE TRUE : ' + modemean([1,2,5,5,9,10]));
// console.log('SHOULD BE FALSE : ' + modemean([1,2,5,8,9,10]));

module.exports = modemean;
