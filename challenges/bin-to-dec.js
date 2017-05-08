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

    //    let binaryArr = binary.split('').reverse().map(function(item){
    //      return Number(item);
    //    });
    //    let store = [];
    //    let exponent = 0;

    //     for(var i = 0; i < binaryArr.length; i++){
    //      let num = binaryArr[i] * (Math.pow(2, exponent));
    //      store.push(num);
    //      exponent += 1
    //    }
    //     let output = store.reduce(function(a,b){
    //       return a + b;
    //     })
    //     console.log('output: '+output);

    return binary.split('')
                 .reverse()
                 .reduce(function(all, item, index) {
                   let num = Number(item) * Math.pow(2, index);
                   all.push(num);
                   return all;
                 }, [])
                 .reduce(function(a, b) {
                   return a + b;
                 });

}

module.exports = binToDec;
