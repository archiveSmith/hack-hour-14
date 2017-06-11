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


  //solution:

  if(!/^[01]+$/.test(binary)) return  'Please pass binary string';

  const binArray = binary.split('').reverse();
  let answer = 0;
  for(let i = 0; i < binArray.length; i++){
    if(binArray[i]==='1'){
      answer += Math.pow(2,i);
    }
  }
return answer;
}

module.exports = binToDec;

// function binToDec(binToDecary) {
//   let answer = 0;
//   for (let i = binToDecary.length - 1; i >= 0; i--) {
//     if (bintoDecary[i] === '1'){
//       answer += Math.pow(2, binToDecary.length - 1 - i);
//     }
//   }
//   return answer;
// }
