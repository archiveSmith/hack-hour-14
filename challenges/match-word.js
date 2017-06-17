
// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
// Or they close a "case" with "esac", i.e. the same keyword backwards.
// for this problem we'll check that all words in a string are "closed".
// Write a function that takes a string and returns true if every word is closed by its
// backwards counterpart. Words must be separated by space or punctuation.

function matchWord(str) {
  if (str === '') return true;
  const strArr = str.match(/[a-zA-Z]+/g);
  if (strArr.length % 2 !== 0) return false;
  // console.log(strArr);
  const checkArr = [strArr[0]];
  // console.log(checkArr);
  for (let i = 1; i < strArr.length; i += 1) {
    const toCheck = checkArr[checkArr.length - 1];
    const rev = strArr[i].split('').reverse().join('');
    // console.log(checkArr);
    if (toCheck.toLowerCase() === rev.toLowerCase()) {
      checkArr.pop();
    } else { checkArr.push(strArr[i]); }
  }
  if (checkArr.length === 0) { return true; }
  return false;
}

module.exports = matchWord;

// console.log(matchWord('__END_DNE-----')); // -> true
// console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
// console.log(matchWord('IF()()fi[]')); // -> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi')); // -> false     not properly closed. like ( [) ]
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
// console.log(matchWord('')); // -> true
