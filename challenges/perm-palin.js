/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 *  - permPalin('abab') => true
 *  - permPalin('cbaba') => true
 *  - permPalin('cbac') => false
 *  - permPalin('a') => true
 *
 */

function permPalin(str) {
  // Try to create palindrome
  // length > 1 or even
  if (str.length === 1) {
    return true;
  } else {
    // ONLY one character that has odd count
    // all others must be even
    const charCounts = {};
    let evens = 0;
    let odds = 0;

    for (let i = 0; i < str.length; i++) {
      if (charCounts[str[i]] === undefined)
        charCounts[str[i]] = 1;
      else
        charCounts[str[i]] += 1;
    }

    for(char in charCounts){
      const count = charCounts[char];

      if(count % 2 !== 0)
        odds++;
      else 
        evens++;
    }

    if (str.length % 2 !== 0) {
      // there must be one od count else false
      if(odds !== 1)
        return false;
    } else if(odds !== 0) {
        return false;
    }

    return true;
  }
}

console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));