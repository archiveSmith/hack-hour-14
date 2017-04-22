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

//initialize empty array of size n
function range(n){
  return Array.apply(null, Array(n)).map((_, i) => i);
}
//define conditions on which to fill each element in result array
function fizzBuzzTest(n){
  const by3 = n % 3 === 0;
  const by5 = n % 5 === 0;

  return  by3 && by5 ? 'fizzbuzz'
               : by3 ? 'fizz'
               : by5 ? 'buzz'
                     : n;
}
//fill elements of array with number or string as defined by fizzBuzzTest function
function fizzbuzz(num){
  return range(num).map(x => fizzBuzzTest(x + 1));
}




module.exports = fizzbuzz;
