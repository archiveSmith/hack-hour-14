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


const fizzbuzz = (num) => {
  let arr = [];
  for (var i = 1; i <= num; i++) {
    //check for numbers divisible by 3 and 5 first
    if (i % 3 === 0 && i % 5 === 0) arr.push('fizzbuzz');
    //check for numbers divisible by 3
    else if (i % 3 === 0) arr.push('fizz');
    //check for numbers divisible by 5
    else if (i % 5 === 0) arr.push('buzz');
    else arr.push(i);
  }
  return arr;
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;
