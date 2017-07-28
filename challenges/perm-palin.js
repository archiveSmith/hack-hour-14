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

 //if more than one letter only appears once, return false
 function permPalin(str) {
   const cache = {};
   let counter = 0;
   for (let i = 0; i < str.length; i += 1) {
     if (cache[str[i]]) cache[str[i]] += 1;
     else cache[str[i]] = 1;
   }
   for (letter in cache) {
     if (cache[letter] === 1) counter += 1;
   }
   if (counter > 1) return false;
   else return true;
 }

 console.log(permPalin('abab')) // => true
 console.log(permPalin('cbaba')) // => true
 console.log(permPalin('cbac')) // => false
 console.log(permPalin('a')) // => true
