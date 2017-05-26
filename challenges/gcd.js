/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  let max = Math.max(a, b);
  
  for (let i = max; i > 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  
  return 1;
}

module.exports = gcd;