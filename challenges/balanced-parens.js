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
  
  if(input.length % 2 !== 0) return false; 
  if(typeof input !== 'string')
  input = input.replace(/[a-z,0-9,\s,\:,\-,\+]/ig,'')
  
  var stack = [];
  var startBracket = { 
    '{': '}', 
    '[': ']', 
    '(': ')' 
  };
  var endBracket = { 
    '}': true, 
    ']': true, 
    ')': true };
  
  for (var i = 0; i < input.length; i ++) {
    if (startBracket[input[i]]) {
      stack.push(input[i]);
    } else if (endBracket[input[i]]) {
      if (startBracket[stack.pop()] !== input[i]) return false;
    }
  }
  
 return stack.length === 0 ? true : false;
  
}

module.exports = balancedParens;
