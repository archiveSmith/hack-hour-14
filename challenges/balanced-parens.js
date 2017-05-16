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
  //dictionary
  const ref = {"(" : ")", "[":"]", "{":"}"}
  
  //clean up array
  let inputArr = input.split("").filter(el=>/^[\(\)\[\]\{\}]/.test(el));
  console.log(inputArr)
  if(inputArr.length % 2 !== 0) return false;
  
  //traverse arr
  for(let i=1; i< inputArr.length; i++) {
    let b = inputArr[i];
    let a = inputArr[0]
    
    console.log("a",a,"b",b)
    
    if(ref[a] === b) inputArr = inputArr.slice(1);
  }
  //if traversed and no problems
  return true;
}

module.exports = balancedParens;
