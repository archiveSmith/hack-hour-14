// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  str = str.toUpperCase() + ' ';
  let words = [];
  let currWord = '';
  for (let index = 0; index < str.length; index++) {
    let currChar = str.charAt(index);
    if ((/^[a-zA-Z]+$/).test(currChar)) {
      currWord += currChar;
    }
    else{
      if (currWord != '') {
        if (words.includes(currWord.split("").reverse().join(""))) {
          if(words.pop() === currWord.split("").reverse().join("")) {
            currWord = '';
            continue;
          }
          else 
            return false; 
        }
        else
          words.push(currWord);
        currWord = '';
      }
      else {
        continue;
      }
    }
  }
  if (words.length === 0)
    return true
  if (words.length%2 != 0)
    return false;
}

module.exports = matchWord;

// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('IF()()fi[]'));
// console.log(matchWord('for__if__rof__fi'));
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord(''));
