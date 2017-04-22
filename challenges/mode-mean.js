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
//parse thru array
//for each element save number and keep track of amount of times it appears.
////loop thru saved array and find max to get mode.

///for mean, access each number:appearance pair and  number*appearance + add to all other array elements and divide by array.lenght
//math.floor the mean 
//check if mean === mode
//return true or false

function modemean(array) {
	let appearances = array.reduce(function(acc, el) {
		//if no key for that num,create and set to one
		if(!acc[el]) {
			acc[el] = 1;
			return acc;
		} else {
	  	acc[el]++;
		  return acc;
		}

	}, {});

	//now that we have an object with the number of appearances paired with each number, we can find the mode.
	let mode;
	let max = [0,0];
	let mean = 0;

	let keys = Object.keys(appearances);
	for (let i=0; i< keys.length; i++) {
		//update max appreances, save number associated with that appearance total
		if(appearances[keys[i]]> max[1]) {
		  max[1] = appearances[keys[i]];
		  max[0] = Number(keys[i]);
		}
		else if (appearances[keys[i]] === max[1]) {
			max[0] = Math.max(Number(keys[i]), max[0]);
		}

		//get sum
		mean = mean + (appearances[keys[i]] * Number(keys[i]));
	}

	//after we looped through the array, we have the max appearances value.
	//we also have a sum of all the numbers that appeared stored in mean.
  	mode = max[0];
	mean = Math.floor(mean/array.length);

	
	return mode === mean? true : false;




}

module.exports(modemean);

