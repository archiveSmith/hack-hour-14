/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    let dec = 0
    for (let i=binary.length-1 ; i>=0 ; i--){
    	console.log('this is the binary',binary[i])
    	let power = binary.length-i-1;
    	dec += +binary[i] * Math.pow(2,power)
    }
    return dec;
}

// binToDec('0101')


function decToBinary (dec){
	// base case
	let bin;
	if (dec === 0) return '';
	(dec%2 === 0) ? bin = '0' : bin = '1';

	return decToBinary(Math.floor(dec/2)) + bin;
}

// decToBinary(294)

module.exports = binToDec;
