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
  let decimal = 0;
  binary.split('').reverse().forEach((el, exp) => {
    if (el === '1') decimal += Math.pow(2, exp);
  });
  return decimal;
}

module.exports = binToDec;

// console.log(binToDec('0'))    // -> 0
// console.log(binToDec('11'))   // -> 3
// console.log(binToDec('100'))  // -> 4
// console.log(binToDec('101'))  // -> 5
// console.log(binToDec('0101'))  // -> 5
// console.log(binToDec('11111')) // -> 31
