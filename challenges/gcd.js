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
        if (a % min === 0 && b % min === 0){return a}
    }
    return 1;
}

module.exports = gcd;