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
  const arr = binary.split('').reverse();
  let decimal = 0;
  let exp = 0;
  arr.forEach((el) => {
    if (el === '1') decimal += Math.pow(2, exp);
    exp += 1;
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
