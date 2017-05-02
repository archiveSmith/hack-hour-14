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
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
        case '[':
        case '{':
        case '(':
          stack.push(input[i]);
          break;
        case ']':
          if (stack[stack.length - 1] === '[') {
              stack.pop();
              break;
          }
          else {
              return false;
          }
        case '}':
          if (stack[stack.length - 1] === '{') {
              stack.pop();
              break;
          }
          else {
              return false;
          }
        case ')':
          if (stack[stack.length - 1] === '(') {
              stack.pop();
              break;
          }
          else {
              return false;
          }
        default:
          break;
    }
  }

  return stack.length === 0 ? true : false;
}

module.exports = balancedParens;
