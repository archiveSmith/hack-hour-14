/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
  if (a === 0 || b === 0) return undefined;
  let lower;
  if (a < b) { lower = a; }
  else { lower = b; }
  lower = Math.abs(lower);
  for (let i = lower; i >= 1; i -= 1) {
    if (a % i === 0 && b % i === 0) return i;
  }
}
module.exports = gcd;

// console.log(gcd(10, 9));
