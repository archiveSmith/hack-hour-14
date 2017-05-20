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
    return (input.match(/\(/g) ? input.match(/\(/g).length : 0) === (input.match(/\)/g) ? input.match(/\)/g).length : 0) && 
           (input.indexOf('(')<input)
           (input.match(/\[/g) ? input.match(/\[/g).length : 0) === (input.match(/\]/g) ? input.match(/\]/g).length : 0) &&
           (input.match(/\{/g) ? input.match(/\{/g).length : 0) === (input.match(/\}/g) ? input.match(/\}/g).length : 0);
}

// module.exports = balancedParens;
console.log(balancedParens(')(( var wow  = { yo: thisIsAwesome() }')); // true
balancedParens(' var hubble = function() { telescopes.awesome();'); 