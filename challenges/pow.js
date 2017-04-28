/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

<<<<<<< HEAD
// function pow(base, power) {
//   if (power === 1) return base;
//   const result = base * pow(base, power - 1);
//   return result;
// }

function pow(base, power) {
  if (power === 1) return base;
  if (power === 0) return 1;
  if (power < 0) return (1 / base) * pow(base, power + 1);
  const result = base * pow(base, power - 1);
  return result;
}

console.log(pow(5, -5));
=======
function pow(base, power) {

}
>>>>>>> 21800b9f5928bdea8ea0429fd82c976f3be95e6c

module.exports = pow;
