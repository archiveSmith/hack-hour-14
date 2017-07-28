/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
  let arr = input.split('');
   let store = [];
   for (let i = 0; i <= arr.length - 1; i++) {
     if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') store.push(arr[i]);
     if (arr[i] === ')') {
       if (store.pop() !== '(') return false;
     }
     if (arr[i] === ']') {
       if (store.pop() !== '[') return false;
     }
     if (arr[i] === '}') {
       if (store.pop() !== '{') return false;
     }
     
   }
   
   return store.length === 0;
  }

module.exports = balancedParens;
