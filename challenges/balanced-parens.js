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

function balancedParens(input) {
    const lastBrackets = [];

    for (let i = 0; i < input.length; i++) {
        const lastBracket = lastBrackets[lastBrackets.length - 1];

        switch (input[i]) {
            case '{':
            case '(':
            case "[":
                lastBrackets.push(input[i]);
                break;
            case '}':
                if(lastBracket === '{')
                    lastBrackets.pop();
                break;
            case ')':
                if(lastBracket === '(')
                    lastBrackets.pop();
                break;
            case ']':
                if(lastBracket === '[')
                    lastBrackets.pop();
                break;
        }
    }

    return (lastBrackets.length === 0) ? true : false;
}

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
