/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let output;
  if (power === 1) {
    output = base;
  } else {
    output = base * pow(base, power - 1);
  }
  return output;
}

module.exports = pow;

console.log(pow(3, 4));
