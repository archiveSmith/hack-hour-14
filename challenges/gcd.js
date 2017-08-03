/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

 //input: 2 numbers
 //output: gcd between them

 function gcd(a, b) {

    let common = Math.min(a,b)

    for(let i = common; common > 0; i = i - 1){
        if(a % i === 0 && b % i === 0){
            return i; 
        }
    }

 }

console.log(gcd(10, 8)) //-> 2
console.log(gcd(10, 9)) //-> 1
module.exports = gcd;


    //  if ( ! b) {
    //      return a;
    //  }

    //  return gcd(b, a % b);
