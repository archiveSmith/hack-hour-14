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
<<<<<<< HEAD
  let storage = [];
  let sum = 0;
  for (let i=0; i< binary.length; i++){
      storage.push(parseInt(Math.pow(2,i)))
  }
  let reverse = storage.reverse()
  
  for (let j=0; j <binary.length; j++){
    if (parseInt(binary[j]) === 1){
      sum += parseInt(storage[j])
    }
    else{
    continue;
  }
  }
  return sum;
=======

>>>>>>> 3f2fba3175b1fbccfcb669a83fed31c293426626
}

module.exports = binToDec;
