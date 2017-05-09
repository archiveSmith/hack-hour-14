// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let strArr = str.match(/[a-zA-Z]+/g)
  if (strArr.length % 2 !== 0){
    return false;
  }


  for (let i=0; i<strArr.length; i++){
    for (let j=i+1; j<strArr.length; j++){ 
      if (strArr[i] === strArr[j].split('').reverse().join('')){
        if ((j - i) % 2 === 1){      
          strArr.splice(i,1)
          strArr.splice(j-1,1)
          j = i+1;
          i--;
        }
      }
    }
  }
  
  if (strArr.length === 0){
    return true;
  }
  return false;
}


module.exports = matchWord;