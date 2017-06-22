// Write a function that returns an array containing the numbers 1 to NUM. 
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers 
// divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
//success = retuns array with nums 1-n, with all numbers divisible by  3 (n%3===0) with "fizz" and numbers divisible by 5 (n%5===0) with buzz.
// iterate thru array and for each number check if divisible by 3, add fizz to output string if true and then check if divisible by 5 and add string "buzz" to output fi true.
//if none of the conditions where met then just push the number to the array, else push output atring.
function fizzbuzz(num) {  
	let outArr = [];
	for(let i=1; i<=num; i++){
		if(i%3===0 && i%5===0)
			outArr.push('fizzbuzz');
		else if(i%3===0)
			outArr.push('fizz');
		else if(i%5===0)
			outArr.push('buzz');
		else
			outArr.push(i);
	}
	return outArr;
}

module.exports = fizzbuzz;
