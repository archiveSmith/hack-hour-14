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
    let output = 0;
    let binDeci = binary.split('.');
    for (let i = binDeci[0].length - 1; i >= 0; i--) {
        if (binDeci[0][i] !== '0') {
            output += Math.pow(2, (binDeci[0].length - 1) - i)
        }
    }
    if (binDeci[1]) {
        for (let i = 0; i < binDeci[1].length; i++) {
            if (binDeci[1][i] !== '0') {
                output += 1 / Math.pow(2, i + 1)
            }
        }
    }
    return output;
}

module.exports = binToDec;
