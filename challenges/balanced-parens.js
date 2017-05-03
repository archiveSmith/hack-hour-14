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

<<<<<<< HEAD
function balancedParens(input) {
    if(input.indexOf("(")===-1 && input.indexOf("{")===-1 && input.indexOf("[")===-1){return true}
    let counter = 0;
    let bracket;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === '(' ||
            input.charAt(i) === '{' ||
            input.charAt(i) === '[') {
            bracket = input.charAt(i)
            counter++
            for (let j = i+1; j < input.length; j++) {
                if (input.charAt(j) === bracket) { counter++ }
                if (bracket ==='(' && input.charAt(j) === ')' ||
                    bracket ==='{' && input.charAt(j) === '}' ||
                    bracket ==='[' && input.charAt(j) === ']') {
                    counter--;
                    if (counter === 0) { 
                        return true && 
                        balancedParens(input.substring(i + 1, j) &&
                        balancedParens(input.substring(j+1,input.length))); }
                }
            }
        }
    }
    return false;
=======
function balancedParens(input){

>>>>>>> a286996bff73140ab888ba0adf4c4178aacd8dc8
}

module.exports = balancedParens;
