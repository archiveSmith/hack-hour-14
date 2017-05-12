// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// module.exports = matchWord;


//regexr.com; regex101.com : Reference for regular expressions
function matchWord(str) {
  if (!str) return true;
  const strArr = str.replace(/[^\w\s]|/g, '').replace(/\s+|_/g, ' ').toLowerCase().split(' ');
  if (strArr.length % 2 === 1) return false;
  const checkArr = [strArr[0]];

  for (let j = 1; j < strArr.length; j++) { 
    let reversed = strArr[j].split('').reverse().join('');
    if (reversed === checkArr[checkArr.length - 1]) {
      checkArr.pop();
    } else {
      checkArr.push(strArr[j]);
    }
  }
  return checkArr.length === 0;
}


module.exports = matchWord;

