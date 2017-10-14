/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

const permPalin = (str) => {
  //if more than one character in str appears an odd # of times, return false
  //create a cache
  const cache = {};
  //keep track of characters that appear odd number of times
  let numOdd = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (!cache[str[i]]) {
      cache[str[i]] = 1;
      numOdd += 1;
    }
    else {
      delete cache[str[i]];
      numOdd -= 1;
    }
  }
  return numOdd <= 1;
}

console.log(permPalin('abab')) // => true
console.log(permPalin('baba')) // => true
console.log(permPalin('cbac')) // => false
console.log(permPalin('a')) // => true
console.log(permPalin('lalala')); // => false















 // const permPalin = (str) => {
 //   //declare cache variable and instantiate to empty object
 //   const cache = {};
 //   //declare numOdd variable and instantiate to 0
 //   let numOdd = 0;
 //   //loop through str and store every letter in cache
 //   for (let i = 0; i < str.length; i +=1 ) {
 //     if (cache[str[i]]) cache[str[i]] += 1;
 //     else cache[str[i]] = 1;
 //   }
 //   //loop through cache
 //   for (let key in cache) {
 //     //if value stored is odd, increment numOdd
 //     //if numOdd > 1 return false
 //     if (cache[key] % 2 !== 0) numOdd += 1;
 //     if (numOdd > 1) return false;
 //   }
 //   //return true
 //   return true;
 // }











 //if more than one letter appears odd number of times, return false
 // const permPalin = (str) => {
 //   //declare cache variable and instantiate to empty object
 //   const cache = {};
 //   //declare numOdd variable and instantiate to 0
 //   let numOdd = 0;
 //   //loop through str and store every letter in cache
 //   for (let i = 0; i < str.length; i += 1) {
 //     if (cache[str[i]]) cache[str[i]] += 1;
 //     else cache[str[i]] = 1;
 //   }
 //   //loop through cache
 //   for (letter in cache) {
 //     //if value stored is odd, increment numOdd
 //     if (cache[letter] % 2 !== 0) numOdd += 1;
 //     //if numOdd > 1 return false
 //     if (numOdd > 1) return false;
 //   }
 //   //return true
 //   return true;
 // }

 module.exports = permPalin;
