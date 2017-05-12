// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll 
// check that all words in a string are "closed". Write a function that takes a string and returns 
// true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    str = str.toLowerCase();
    let wordArr = str.match(/[a-z]+/g);
    if(wordArr && wordArr.length%2 === 1) return false;
    if(!wordArr) return true;
    let stack = [];
    for(let i=0; i<wordArr.length; i++){
        if(stack.length > 0 && stack[stack.length-1]===wordArr[i].split('').reverse().join(''))  stack.pop();
        else stack.push(wordArr[i]);
    }
    if(stack.length === 0) return true;
    else return false;
}

module.exports = matchWord;
