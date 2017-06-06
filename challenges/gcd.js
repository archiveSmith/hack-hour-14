/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let high = 0;
    let low = 0;
    let start = 0;
    if (a > b){
        high = a;
        low = b;
    }
    else{
        high = b;
        low = a;
    }
    start = high/2;
    for (let index = Math.round(start); index > 0; index--) {
        if (high % index === 0 && low % index === 0) return index;
    }
    return 1;

}

module.exports = gcd;