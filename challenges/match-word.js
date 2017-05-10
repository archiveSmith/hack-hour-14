// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. 
// for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true 
// if every word is closed by its backwards counterpart. 
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	let arr = str.toLowerCase().split('');
	let store = [];
	let current = '';

	for (let i = 0; i < arr.length; i++) {
		if (/[a-z]+/.test(arr[i])) {
			current += arr[i];
		} else {
			if (current.length !== 0) {
				store.push(current);
				current = '';
			}
		}
	}
	if (current.length > 0) store.push(current);

	if (store.length % 2 !== 0) return false;
	
	function balanceWords(arr) {
		let store = [];
		for (let i = 0; i < arr.length; i++) {
			if (i === 0) {
				store.push(arr[i]);
				continue;
			}
			if (store[store.length - 1].split('').reverse().join('') !== arr[i]) {
				store.push(arr[i]);
			} else {
				store.pop();
			}
		}
		return store.length === 0;
	}
	
	return balanceWords(store);
}

module.exports = matchWord;