/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let total = base;
  power--;
  if (power > 0){
    total *= pow(base, power);
  }
  return total;
}


module.exports = pow;
