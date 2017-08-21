/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

const pow = (base, power) => {
  //any number to the power of 0 = 1
  //use this as our base case
  if (power === 0) return 1;
  //return base multiplied by recursive call where we decrement power by 1
  return base * pow(base, power - 1);
};

console.log(pow(0, 10)) // return 0
console.log(pow(10, 0)); // return 1
console.log(pow(2, 2)) // return 4
console.log(pow(-5, 3)) // return -125







//5^-1 = 1 / 5
//5^-3 = 1 / (5 * 5 * 5)

const pow = (base, power) => {
  if (power === 0) return 1;
  if (power < 0) return 1 / pow(base, - power);
  return base * pow(base, power - 1);
}


module.exports = pow;
