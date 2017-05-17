<<<<<<< HEAD
// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
// Or they close a "case" with "esac", i.e. the same keyword backwards. 
// for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is 
    // closed by its backwards counterpart. 
// Words must be separated by space or punctuation.
=======
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.
>>>>>>> c4f344d6fc53288e9ce1210315367f0c6dea1718

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
<<<<<<< HEAD
	const inputArr = str.toLowerCase().replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, "_").split('_');
	const tempArr = [];
	for (let i=0 ; i<inputArr.length ; i++){
		const lastWord = tempArr[tempArr.length-1];
		const currWord = inputArr[i];
		if(currWord.length>0){
			if (isReverse(lastWord, currWord)) tempArr.pop();
			else tempArr.push(currWord);
		}
	}
	return tempArr.length>0 ? false : true;
}

function isReverse (str1, str2) {
	return str1 === str2.split("").reverse().join("");
}

module.exports = matchWord;
=======

}

module.exports = matchWord;
>>>>>>> c4f344d6fc53288e9ce1210315367f0c6dea1718
