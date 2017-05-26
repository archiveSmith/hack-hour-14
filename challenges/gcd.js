/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let min = (a <= b) ? a : b;
    for(min; min > 0; min--){
        if (Math.abs(a) % min === 0 && Math.abs(b) % min === 0){return min}
    }
    return 1;
}

console.log(gcd(44,8))

module.exports = gcd;