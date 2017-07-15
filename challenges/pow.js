/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 //input: base -> number, power -> number
 //output: result of base risen to the provided power


function pow(base, power) {
  //base case
  //   //anything to 0 power is 1
  // if(power===0){
  //   return 1
  // }
  // //recusive call
  //   //multiply base in each recusive call
  //   //subtract power each recuvsive call
  // else{
  //   return base * pow(base, power -1); 
  // }

  return power > 0 ? base * pow(base, power -1) : 1; 

}

// 2 * (2 * 2 * (1) )

// console.log(pow(2,3)); 

module.exports = pow;



// //any number to power of 0 is 1
//     if(power === 0){
//       return 1;
//     }else{
//  //decrement the power after each recursive call until we hit the base case
//       return base * pow(base, power-1); 
//     }