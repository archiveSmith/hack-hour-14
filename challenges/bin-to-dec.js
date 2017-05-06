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
    const array = binary.split("");
    return array.reduce((acc, el, index) => {
        acc = acc + (Number(el) * Math.pow(2, index));
        return acc;
    }, 0)
}

function dectoBin(decimal) {
    const output = [];
    //keep dividing until it cannot be divided by 2
    while (decimal !== 0) {

        if (decimal % 2 === 0) {
            decimal = decimal / 2;
            output.push('0');
        } else {
            decimal = (decimal -1)/2;
            output.push('1');
        }
    }
    return output.join();

}


module.exports = binToDec;
