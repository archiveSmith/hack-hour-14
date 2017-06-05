/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
    if (a===0 || b === 0) return "zero is not a valid input"
    a = Math.abs(a);
    b = Math.abs(b);
    let less = (a >= b) ? b : a;
    for (var i = less; i > -1; i--) {
        if (a % i === 0 && b % i === 0) break;
    }
    return i
}
module.exports = gcd;

// function abs (num){
//     if(num<0)return 0-num;
//     return num;

// }