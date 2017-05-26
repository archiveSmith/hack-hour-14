/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const divisors = [];
  let min = Math.abs(Math.min(a, b));
  for (let i = 0; i <= min; i += 1) {
    if (a % i === 0 && b % i === 0) divisors.push(i);
  }
  divisors.sort((small,big) => small - big);
  return divisors[divisors.length - 1];
}

console.log(gcd(8, 12));

module.exports = gcd;
