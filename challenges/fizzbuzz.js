// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]
//success = retuns array with nums 1-n, with all numbers whose remainder when divided by  3 is 0 (n%3===0) replaced with "fizz" and numbers whose remainder when divided by 5 is 0(n%5===0) replaced with buzz.
// iterate thru array and for each number check if divisible by 3, add fizz to output string if true and then check if divisible by 5 and add string "buzz" to output fi true.
//if none of the conditions where met then just push the number to the array, else push output atring.
function fizzbuzz(num) {  
	const result = [];
	for(let i = 1 ; i< num; i++) {
		let string = '';
		if (i%3 === 0) {
			string += 'fizz';
		}
		if (i%5 === 0) {
			string += 'buzz';
		}
		if (!string) {
			result.push(n);
		}
		else {
			result.push(string);
		}
	}
	return result;

}

module.exports = fizzbuzz;
