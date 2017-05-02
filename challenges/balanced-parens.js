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
    let beigingBracket = ["(", "{", "["];
    let endBracket = [")", "}", "]"];
    if (input.length === 1){
        return false;
    } else {
        let arr = [];
        for (let i = 0; i < input.length; i++){
            if (beigingBracket.indexOf(input[i]) > -1){
              arr.push(1);
            } else if (endBracket.indexOf(input[i]) > -1){
              arr.pop();
            }
        }
        return arr.length === 0;
    }
  return true;
}

module.exports = balancedParens;
