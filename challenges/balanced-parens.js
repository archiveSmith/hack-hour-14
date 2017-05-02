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
  const arr = input.split('');
  // console.log(arr);
  let leftBracket = 0;
  let leftParens = 0;
  let leftCurly = 0;
  let rightBracket = 0;
  let rightParens = 0;
  let rightCurly = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '[' && arr.indexOf(']') > i &&
    arr.indexOf('(') > arr.indexOf(']') &&
    arr.indexOf('{') > arr.indexOf(']')) { leftBracket += 1; }
    else if (arr[i] === ']') { rightBracket += 1; }
    else if (arr[i] === '(' && arr.indexOf(')') > i) { leftParens += 1; }
    else if (arr[i] === ')') { rightParens += 1; }
    else if (arr[i] === '{' && arr.indexOf('}') > i ) { leftCurly += 1; }
    else if (arr[i] === '}') { rightCurly += 1; }
  }
  if (leftBracket === rightBracket && leftParens === rightParens && leftCurly === rightCurly) {
    return true;
  }
  return false;
}

console.log(balancedParens('[(]{)}'));

module.exports = balancedParens;
