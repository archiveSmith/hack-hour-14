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
    let square = 0,smooth = 0,curly = 0;
    let lastOpen = [];
    for (let char of input){
        if(char === '['){
            lastOpen.push(char);
            square++;
        } else if (char === '('){
            lastOpen.push(char);
            smooth++;
        } else if (char === '{'){
            lastOpen.push(char);
            curly++;
        }

        if((char === ']' && lastOpen[lastOpen.length-1] === '[')){
            lastOpen.pop();
            square--
        } else if ((char === '}' && lastOpen[lastOpen.length-1] === '{')){
            lastOpen.pop();
            curly-- 
        } else if ((char === ')' && lastOpen[lastOpen.length-1] === '(')){
            lastOpen.pop();
            smooth--
        }

    }

    return (square === 0 && curly === 0 && smooth === 0)
}

module.exports = balancedParens;
