// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str === '') return true;
  let array = str.split(/[^a-zA-Z]/);
  let wordArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== '') wordArr.push(array[i].toLowerCase());
  };
  console.log(wordArr)
  let stack = [];
  for (let i = 0; i < wordArr.length; i += 1) {
    let reversed = wordArr[i].split('').reverse().join('');
    if (stack[stack.length - 1] === reversed) stack.pop();
    else if (!stack.includes(wordArr[i])) stack.push(wordArr[i]);
  }
  if (stack.length === 0) return true;
  else return false;
}

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

module.exports = matchWord;

//check if reverse() is substring of str
//split string into array of words

// for (let i = 0; i < newArr.length; i += 1) {
//   for (let j = 0; j < newArr.length; j += 1) {
//     let word1 = newArr[i].split('');
//     let word2 = newArr[j].split('');
//     console.log(arr1);
//     let reversed = .reverse();
//     if (arr1 === reversed) return true;
//   }
// }

// console.log(newArr);
// let matches = {};
// for (let i = 0; i < newArr.length; i += 1) {
//   let reversed = newArr[i].split('').reverse().join('');
// }
