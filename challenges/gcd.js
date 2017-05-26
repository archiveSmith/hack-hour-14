/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let evaluator = (a <= b) ? a : b;
    for(let i = 0; i < evaluator; i++){
        if (a % (evaluator - i) === 0 && b % (evaluator - i) === 0){return true}
    }
    return false;
}
module.exports = gcd;