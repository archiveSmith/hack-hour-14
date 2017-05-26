/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
    let array = [];
    let gcdArray=[];
    array.push(a,b)
    let min = Math.min(...array)
    for(i=1;i<min;i++){
        if(a%i === 0 && b%i === 0){
            gcdArray.push(i)
        }
    }
    return gcdArray[gcdArray.length-1]
}

gcd(10, 8)
// module.exports = gcd;