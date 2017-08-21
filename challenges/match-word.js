// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
//Or they close a "case" with "esac", i.e. the same keyword backwards.
//for this problem we'll check that all words in a string are "closed".
//Write a function that takes a string and returns true if every word is closed by its backwards counterpart.
//Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true


const matchWord = (str) => {
  //edge case: empty string
  if (str === '') return true;
  //convert str to lower case, split it at non [a-z] characters, and then filter out empty strings
  const wordArr = str.toLowerCase().split(/[^a-z]+/).filter(item => item !== '');
  //if wordArr.length is uneven number, return false
  if (wordArr.length % 2 === 1) return false;
  //initialize stack as empty array
  const stack = [];
  //loop through wordArr
  for (let i = 0; i < wordArr.length; i += 1) {
    //declare variable reversed and set it to reverse of wordArr[i]
    const reversed = wordArr[i].split('').reverse().join('');
    //if last item in stack === reverse of current item in wordArr, pop it off the stack
    if (stack[stack.length - 1] === reversed) stack.pop();
    //else, push current item in wordArr onto stack
    else stack.push(wordArr[i]);
  }
  //if stack is empty, return true, else, return false
  return !stack.length;
}

console.log(matchWord('__END_DNE-----'));  //-> true
console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ]
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //-> true











// const matchWord = (str) => {
//   //edge case: empty string
//   if (str === '') return true;
//   //convert str to lower case, split it at non [a-z] characters, and then filter out empty strings
//   let wordArr = str.toLowerCase().split(/[^a-z]/).filter((item) => item !== '');
//   //if wordArr.length is uneven number, return false
//   if (wordArr.length % 2 === 1) return false;
//   //initialize stack as empty array
//   const stack = [];
//   //loop through wordArr
//   for (let i = 0; i < wordArr.length; i += 1) {
//     //if last item in stack === reverse of current item in wordArr, pop it off the stack
//     if (stack[stack.length - 1] === wordArr[i].split('').reverse().join('')) stack.pop();
//     //else, push current item in wordArr onto stack
//     else stack.push(wordArr[i]);
//   }
//   //if stack is empty, return true, else, return false
//   return !stack.length;
// }

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

// function matchWord(str) {
//   if (!str) return true;
//   const strArr = str.replace(/[^\w\s]|/g, '').replace(/\s+|_/g, ' ').toLowerCase().split(' ');
//   console.log(strArr)
//   if (strArr.length % 2 === 1) return false;
//   const checkArr = [strArr[0]];
//   let j;
//   for (j = 1; j < str.length; j += 1) {
//     let reversed = strArr[j].split('').reverse().join('');
//     if (reversed === checkArr[checkArr.length - 1]) {
//       checkArr.pop()
//     } else {
//       checkArr.push(strArr[j]);
//     }
//   }
//   return checkArr.length === 0;
// }

// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

module.exports = matchWord;
