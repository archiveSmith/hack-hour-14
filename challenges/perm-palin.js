/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 *  - permPalin('abab') => true
 *  - permPalin('cbaba') => true
 *  - permPalin('cbac') => false
 *  - permPalin('a') => true
 *
 */

function permPalin(str) {
   if (str.length === 1) {
     return true;
   }
   
   let charCount = {};
   
   for (let i = 0; i < str.length; i++) {
     let char = str[i];
     if (charCount[char] === undefined) {
       charCount[char] = 1;
     }  
     else {
       charCount[char]++;
     }
   }
   
   let keys = Object.keys(charCount);
   let numOdd = 0;
   for (let j = 0; j < keys.length; j++) {
     if (charCount[keys[j]] % 2) {
       numOdd++;
     }
   }
   
   return numOdd > 1 ? false : true;
 }