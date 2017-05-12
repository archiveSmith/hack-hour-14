// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
<<<<<<< HEAD
    
  let newStr = str.toUpperCase().replace(/[^0-9a-z]/gi, ' ');
  
  let currWord = '';
  let arr = [];
 
  
  for(let i = 0; i < newStr.length; i++){
    // console.log(currWord)
    // console.log(newStr[i])
    if(newStr[i] !== ' '){
      currWord += newStr[i];
      if(i === newStr.length -1){
        arr.push(currWord);
      }
    }
    else{
      if(currWord != '' ){
      arr.push(currWord);
      currWord = '';
      }
    }
  }
  
  let flag = true;
  console.log(arr);
  arr.forEach((element,index) => {
    let revEle = element.split('').reverse().join('');
    let thatIndex = arr.indexOf(revEle);
    console.log('that index',thatIndex + 1);
    console.log('index',index + 1);
    console.log('substract = ',(thatIndex + 1) - (index + 1));
    if ( !(((thatIndex + 1) - (index + 1)) % 2) ){
      console.log('!!!')
        console.log(index != thatIndex -1)
        flag = false;
    } 

  })
  return flag;
}



module.exports = matchWord;
=======

}

module.exports = matchWord;
>>>>>>> c4f344d6fc53288e9ce1210315367f0c6dea1718
