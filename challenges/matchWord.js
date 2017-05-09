// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true


function matchWord(str) {
  
  if(str === '') return true;
  
    //remove extra characters
    let strArr = str.split(/[\b_\W]/).filter(Boolean);
    
    while(strArr.length) {
      if(strArr.length === 1) return false;
      
      let first = '';
      let last = strArr.pop();
      
      //reverse first
      for(let c= strArr[0].length-1; c>=0; c--) {
        let char = strArr[0]
        first += char[c];
      }
      
      //check if first reversed == last
      if(first.toLowerCase() !== last.toLowerCase()) return false;
  
      strArr = strArr.slice(1);
    }
  return true;
}

module.exports = matchWord;