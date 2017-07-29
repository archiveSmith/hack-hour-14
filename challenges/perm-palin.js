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

 //if more than one letter appears odd number of times, return false
 const permPalin = (str) => {
   //declare cache variable and instantiate to empty object
   const cache = {};
   //declare numOdd variable and instantiate to 0
   let numOdd = 0;
   //loop through str and store every letter in cache
   for (let i = 0; i < str.length; i += 1) {
     if (cache[str[i]]) cache[str[i]] += 1;
     else cache[str[i]] = 1;
   }
   //loop through cache
   for (letter in cache) {
     //if value stored is odd, increment numOdd
     if (cache[letter] % 2 !== 0) numOdd += 1;
     //if numOdd > 1 return false
     if (numOdd > 1) return false;
   }
   //return true
   return true;
 }

 console.log(permPalin('abab')) // => true
 console.log(permPalin('cbaba')) // => true
 console.log(permPalin('cbac')) // => false
 console.log(permPalin('a')) // => true
 console.log(permPalin('lalala')); // => false

 module.exports = permPalin;
