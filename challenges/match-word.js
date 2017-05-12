// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
<<<<<<< HEAD
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// MY SOLUTION:

// function matchWord(str) {
//   if (str === '') return true;
//   let array = str.split(/[^a-zA-Z]/);
//   let wordArr = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] !== '') wordArr.push(array[i].toLowerCase());
//   };
//   let stack = [];
//   for (let i = 0; i < wordArr.length; i += 1) {
//     let reversed = wordArr[i].split('').reverse().join('');
//     if (stack[stack.length - 1] === reversed) stack.pop();
//     else if (!stack.includes(wordArr[i])) stack.push(wordArr[i]);
//   }
//   if (stack.length === 0) return true;
//   else return false;
// }

// FELLOW SOLUTION:

function matchWord(str) {
  if (!str) return true;
  const strArr = str.replace(/[^\w\s]|/g, '').replace(/\s+|_/g, ' ').toLowerCase().split(' ');
  if (strArr.length % 2 === 1) return false;
  const checkArr = [strArr[0]];
  let j;
  for (j = 1; j < str.length; j += 1) {
    let reversed = strArr[j].split('').reverse().join('');
    if (reversed === checkArr[checkArr.length - 1]) {
      checkArr.pop()
    } else {
      checkArr.push(strArr[j]);
    }
  }
  return checkArr.length === 0;
}

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
=======
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

}
>>>>>>> c4f344d6fc53288e9ce1210315367f0c6dea1718

module.exports = matchWord;
