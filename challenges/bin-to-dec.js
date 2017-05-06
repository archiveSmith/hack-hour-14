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
  let arr = binary.split('').reverse();
  let newArr = arr.map((num, index) => {
    return num * Math.pow(2, index);
  });
  return newArr.reduce((a,c) => { return a + c; });
}

console.log(binToDec('101'));

module.exports = binToDec;

//split binary into array of numbers and reverse()
//loop through array
//multiply 2 x indexOf(array[i])
//reduce to sum of all values
