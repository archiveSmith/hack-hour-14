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

function balancedParens(string){
  let allParens = string.replace(/\{|\[/g, '(').replace(/\}|\]/g, ')');
  let counter = 0;
  let counter2 = 0;
  for(i=0;i<allParens.length;i++){
  if(allParens[i]==='(' ){
    counter++;
  }else if(allParens[i]===')'){
    counter2++;
  }
  }
  return counter===counter2;
}

module.exports = balancedParens;
