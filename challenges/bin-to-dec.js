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

    // console.log(binary);
    // if(binary === '') {
    //     return;
    // }

    return binary.split('').reverse().reduce((acc, val, ind) => {
        return acc += Number(val);
    }, 0)

    // return binToDec(binary.substring(0, binary.length - 1));

    // reverse string
    // iterate each char
    // double multiplier
    // let total = 0;
    // let value = 1;
    // for (let i = 0; i < binary.length; i++) {

    //     if (binary.charAt(binary.length - 1 - i) === '1') {
    //         total += value;
    //     };

    //     // console.log(value);
    //     value *= 2;
    // }

    // return total;
}

// console.log(binToDec('0')) //   -> 0
// console.log(binToDec('11')) //  -> 3
// console.log(binToDec('100')) // -> 4
// console.log(binToDec('101')) // -> 5
console.log(binToDec('0101')) // // -> 5

module.exports = binToDec;
