
// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
// Or they close a "case" with "esac", i.e. the same keyword backwards. 
//for this problem we'll check that all words in a string are "closed". 
//Write a function that takes a string and returns true if every word is closed by 
//its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

    // split words
    // iterate through words and compare using stack
    const words = str.split(/[^a-z]/gi).filter((ele) => ele !== '').map(ele => ele.toLowerCase());
    console.log(words);
    // odd length is invalid
    if (words.length % 2 !== 0)
        return false;
    else if (words.length === 0) {
        return true;
    }
    else if (words.length > 0) {
        const mid = words.length / 2;
        for (let i = 0; i < words.length / 2; i++) {
            if (words[i].split('').join() != words[words.length - i - 1].split('').reverse().join())
                return false;
            return true;
        }
    }
}



console.log(matchWord('__END_DNE-----'));//  -> true
console.log(matchWord('__ENDDNE__'));//  -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));//  -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));//  -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));//  -> true
console.log(matchWord(''));//  -> true


module.exports = matchWord;
