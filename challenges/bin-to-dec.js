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
    return binary.split('').reverse().reduce( (dec,num, i) => dec += Number(num)*Math.pow(2,i), 0 );
}

function decToBin(decimal) {
    return (decimal>1 ? decToBin(Math.floor(decimal/2)) : '') + (decimal%2).toString();
}

module.exports = binToDec;