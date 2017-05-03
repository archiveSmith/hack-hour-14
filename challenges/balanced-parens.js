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
 *  balancedParens('[(]{)}'); // false - won't pass this
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  const stack = [];
  const open = { '(': ')', '[': ']', '{': '}' };
  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    if (open[char]) {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (open[stack.pop()] !== char) { return false; }
    }
  }
  return stack.length === 0;
}

// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[(]{)}')); // false

module.exports = balancedParens;
