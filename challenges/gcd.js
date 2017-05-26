/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 * gcd(20,10) -> 10
 * gcd(5,15) -> 5
 * gcd(10,22) -> 2
 *
 */
function gcd(a, b) {
    let max = Math.max(a,b);
    let min = Math.min(a,b);

    if(max % min === 0) return Math.abs(min);

    else {
        return Math.abs(max % min);
    }
}
module.exports = gcd;