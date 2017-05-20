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
//Permutation Palindrome
function permPalin(str) {
  let isPal = false;
  const charactersObject = {};
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (charactersObject.hasOwnProperty(arr[i])) {
      charactersObject[arr[i]] = charactersObject[arr[i]] + 1;
    } else {
      charactersObject[arr[i]] = 1;
    }
  }
  const keysArr = Object.keys(charactersObject);

  let oddCount = 0;
  for (let k = 0; k < keysArr.length; k++) {
    let val = charactersObject[keysArr[k]];
    if (isOdd(val)) {
      oddCount++;
    }
  }

  if (oddCount <= 1) {
    isPal = true;
  }
  return isPal;
}

function isOdd(num) {
  return num % 2;
}

module.exports = permPalin;