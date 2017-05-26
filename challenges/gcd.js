/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 * gcd(20,10) -> 10
 * gcd(5,15) -> 5
 * gcd(10,22) -> 2
 *
 */
function gcd(a, b) {
    let dividend = Math.abs(Math.max(a,b));
    let divisor = Math.abs(Math.min(a,b));
    let remainder = dividend % divisor;
    
    console.log("max", dividend, "min", divisor, "remainder", remainder)

    //if divisor goes perfectly into the bigger number
    if(remainder === 0) return divisor;

    else {
        //recursive call to find the gcd for the smaller num & remainder
        return gcd(divisor, remainder);
    }
}

module.exports = gcd;