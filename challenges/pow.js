/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (typeof base !== "number" || typeof power !== "number") return "BAD INPUT";
    if (power === 0) return 1;
    if (power === 1) return base;
    if (power < 0) return (1.0/(pow(base,Math.abs(power))));
    return pow(base,power-1)*pow(base,1);
}

module.exports = pow;
