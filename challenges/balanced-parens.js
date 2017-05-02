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
  let map = {
    '[]': 0,
    '{}': 0,
    '()': 0
  }

  for (let i = 0; i < input.length; i++){
    if (input[i] === '['){
      map['[]'] = map['[]'] + 1
    }
    if (input[i] === ']'){
      map['[]'] = map['[]'] - 1
    }
    if (input[i] === '('){
      map['()'] = map['()'] + 1
    }
    if (input[i] === ')'){
      map['()'] = map['()'] - 1
    }
    if (input[i] === '{'){
      map['{}'] = map['{}'] + 1
    }
    if (input[i] === '}'){
      map['{}'] = map['{}'] 1 1
    }

    if (map['[]'] < 0 || map['()'] < 0 || map['{}'] < 0){
      return false
    }

    if (!map['[]'] && !map['()'] &!map['{}']){
      return true
    } else {
      return false
    }
  }
}

module.exports = balancedParens;
