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
  const parens = [];
  
    return input.split('').reduce((total, curr, i, arr) => {
        ['(','{','['].indexOf(curr) > -1 ? parens.push(curr) : 0

        if([')','}',']'].indexOf(curr) > -1){
            if(curr === ']' && last==='[' || curr === '}' && last==='{' || curr === ')' && last === '(') parens.pop();
            else return false;
        }

        if(i === arr.length-1 && parens.length > 0) return false;
          return total;
      }, true); 
}

module.exports = balancedParens;