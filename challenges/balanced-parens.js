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
  let openParens = input.match(/\(+/g);
  let closeParens = input.match(/\)+/g);
  let openCurly = input.match(/\{+/g);
  let closeCurly = input.match(/\}+/g);
  let openBrace = input.match(/\[+/g);
  let closeBrace = input.match(/\]+/g);
  
  if (openParens.length === closeParens.length && openParens.length === closeParens.length && openBrace.length === closeBrace.length) {
    return true;
  }
  
  return false;
}

module.exports = balancedParens;
