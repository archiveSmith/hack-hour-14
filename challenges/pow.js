/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    return (power === 1) ? base*power : pow(base,--power)*base;
}

module.exports = pow;

// console.log(pow(3,3))