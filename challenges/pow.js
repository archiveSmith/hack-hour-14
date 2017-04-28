/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

<<<<<<< HEAD
// function powNoRe(base, power) {
// let value=base
// for (let i=power-1;i>0;i--){
//     value = value*base
// }
// return value;
// }

function pow(base,power){
    if(power === 0){return 1};
    if(power ===1){return base};
    let value;
    value = base * powRe(base, power-1)
    return value;
=======
function pow(base, power) {

>>>>>>> 21800b9f5928bdea8ea0429fd82c976f3be95e6c
}

module.exports = pow;
