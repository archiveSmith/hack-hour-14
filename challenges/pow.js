/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  //any number to power of 0 is 1
    if(power === 0){
      return 1;
    }else{
 //decrement the power after each recursive call until we hit the base case
      return base * pow(base, power-1); 
    }
}

module.exports = pow;
