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
 	let mean = Math.floor(array.reduce((acc, cur) => {
 		return acc + cur;
 	}, 0) / array.length);

 	let modeObj = array.reduce((acc, cur) => {
 		if (acc[cur] === undefined) {
 			acc[cur] = 1;
 		}else if (acc.hasOwnProperty(cur)) {
 			acc[cur] += 1;
 		}
 		return acc;
 	}, {});

 	let mode = array.sort((a, b) => {
 		return modeObj[a] - modeObj[b];
 	}).reverse();

 	let max;
 	mode.forEach((cur) => {
 		if (max === undefined) {
 			max = cur;
 		} else if (max !== cur) {
 			if (modeObj[max] === modeObj[cur]) {
 				max = max > cur ? max : cur;
 			}
 		}
 	});

 	return max == mean;
 }

 module.exports = modemean;
