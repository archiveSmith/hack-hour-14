/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	let output;
	for (let i=0 ; i<arr.length ; i++){
		val1 = arr[i];
		remArr = arr.slice(0,i).concat(arr.slice(i+1,arr.length));
		output = remArr.reduce((acc,val2)=>{
			if (val1+val2 === n) return true
		}, false);
		if (output) return true
	}
	return false;
}

module.exports = twoSum;