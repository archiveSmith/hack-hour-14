/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
  let min = Math.min(a, b)
  let arr = [];
  for (let i = 0; i < min; i += 1) {
    if (a % i === 0 && b % i === 0) {
      arr.push(i)
    }
  }
  return Math.max(...arr)
}

module.exports = gcd;