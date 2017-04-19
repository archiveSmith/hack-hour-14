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

function fizzbuzz(num) {  
	const output = [];
	// iterate from 1 to num
	for (let i=1 ; i<=num ; i++){
		// check if i is divisible by both 3 and 5
		if (i%3===0 && i%5===0){output.push("fizzbuzz");}
		// check if i is divisible by 3
		if (i%3===0){output.push("fizz");}
		// check if i is divisible by 5
		if (i%5===0){output.push("buzz");}
		// default case: number is not divisible by 3 or 5
		else {output.push(i)}
	}
	return output;
}

// function fizzbuzzAlt(num) {
// 	const output = [];
// 	for (let i=1 ; i<=num ; i++){
// 		(i%3===0 && i%5===0) ? 
// 			output.push("fizzbuzz") :
// 		(i%3===0) ?
// 			output.push("fizz") :
// 		(i%5===0) ?
// 			output.push("buzz") :
// 			output.push(i)
// 	}
// 	return output;
// }

// console.log(fizzbuzz(16));

module.exports = fizzbuzz;
