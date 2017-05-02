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
    const openCount = [0,0,0];
    const closedCount = [0,0,0];
    
    if(input[0] === ")" || input[0] === "]" || input[0] === "}") return false;

    for(let i=0; i<input.length; i++) {
        let char = input[i];
        
        switch(char) {
          case "(":
            openCount[0]++
            break;
          case "[":
            openCount[1]++
            break;
          case "{":
            openCount[2]++
            break;
            
          case ")" :
            closedCount[0]++
            break;
          case "]":
            closedCount[1]++
            break;
          case "}":
            closedCount[2]++
            break;
        }
    }
    
    return isEqual(openCount, closedCount);

}

function isEqual(a1, a2) {
  if(a1.length !== a2.length) return false;
  for(let i=0; i< a1.length; i++) {
    if(a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = balancedParens;
