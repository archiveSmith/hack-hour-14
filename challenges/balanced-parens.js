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
    let parens = 0;
    let curly = 0;
    let bracket = 0;
    let arr = [];
    for(let index=0; index < input.length; index++){
        if (parens < 0 || curly < 0 || bracket < 0){
            return false;
        }
        if(input.charAt(index) === '(') { parens++; arr.push(input.charAt(index)); }
        else if(input.charAt(index) === '{') { curly++; arr.push(input.charAt(index)); }
        else if(input.charAt(index) === '[') { bracket++; arr.push(input.charAt(index)); }
        
        else if(input.charAt(index) === ')') {
          if(arr.pop() === '(')
            parens--;
          else
            return false;
        }
        else if(input.charAt(index) === '}'){
          if(arr.pop() === '{')
            curly--;
          else
            return false;
        }  
        else if(input.charAt(index) === ']') {
          if(arr.pop() === '[')
            bracket--;
          else
            return false;
        }
        
    }
    if (parens === 0 && curly === 0 && bracket === 0) return true;
    else return false;
}

module.exports = balancedParens;
