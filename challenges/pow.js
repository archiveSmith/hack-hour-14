/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, orig) {
	if (power === 0) return base;
	if (orig === undefined) {
		orig = base;
		base *= base;
		power--;
	} else {
		base *= orig;
	}
	power--;
	return pow(base, power, orig)
}

module.exports = pow;
