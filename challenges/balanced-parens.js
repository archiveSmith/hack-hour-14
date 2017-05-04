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


// function balancedParens(input) {
//   const simplified = input.replace(/[^(){}\[\]]/g, '');
//   const stack = [];
//
//   for (let i = 0; i < simplified.length; i += 1) {
//     if (simplified[i] === ']' || simplified[i] === '}' || simplified[i] === ')') stack.pop();
//     else stack.push(simplified[i]);
//   }
//   if (stack.length === 0) return true;
//   return false;
// }

function balancedParens(input) {
  if (input.length === 0) return true;
  let matches = {'(': ')', '[': ']', '{': '}'}
  let arr = [];
  for(let i = 0; i < input.length; i += 1) {
    let char = input[i];
    if (char in matches){
      arr.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (matches[arr.pop()] !== char) return false;
    }
  }
  return !arr.length;
}

console.log(balancedParens('var hubble = function() { telescopes.awesome();'));

module.exports = balancedParens;
