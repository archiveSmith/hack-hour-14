/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

const getDivisor = (num) => {
  const result = []
  for (let i = num; i >= 1; i--) {
    if (num % i === 0) result.push(i)
  }
  return result
}

const gcd = (a, b) => {
  const dA = getDivisor(a)
  const dB = getDivisor(b)
  const long = (dA.length >= dB.length) ? dA : dB
  const short = (dA.length <= dB.length) ? dA : dB
  for (let i = 0; i < short.length; i++) {
    if (long.includes(short[i])) return short[i]
  }
}

module.exports = gcd
