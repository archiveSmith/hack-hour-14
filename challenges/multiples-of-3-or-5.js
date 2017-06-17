'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  for (let i = 1; i < z; i++) {
    if (i % x === 0 || i % y === 0) {
      sum += i;
    }
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;


/*
  Let's start by finding the sum of all multiples of 3 less than 1000:
         threesSum =  3 + 6 + 9 + ... + 999
                                 =
            (3 * 1) + (3 * 2) + (3 * 3) + ... + (3 * 333)
                                 =
                    3 * (1 + 2 + 3 + ... + 333)
                                 =
                    3 * ( 333 * (333 + 1) / 2 )

  We can do the same thing with 5:
             fivesSum = 5 + 10 + ... + 1000
                                 =
                      5 * (200 * (200 + 1) / 2)

  If we add threes + fives, we will have counted all multiples of 15 two times,
  because 15 is a multiple of 3 and a multiple of five.

  So we want to return: threesSum + fivesSum - fifteensSum
*/

function sumMultiples3Or5Below1000() {
  // calculate threesSum
  const threesSum = 3 * (Math.floor(1000 / 3) * (Math.floor(1000 / 3) + 1) / 2);
  // calculate fivesSum
  const fivesSum = 5 * (Math.floor(1000 / 5) * (Math.floor(1000 / 5) + 1) / 2);
  // calculate fifteensSum
  const fifteensSum = 15 * (Math.floor(1000 / 15) * (Math.floor(1000 / 15) + 1) / 2);
  // return threesSum + fivesSum - fifteensSum
  return threesSum + fivesSum - fifteensSum;
}



function sumMultiplesXOrYBelowZ(x, y, z) {
  // calculate xSum
  const xSum = x * (Math.floor(z / x) * (Math.floor(z / x) + 1) / 2);
  // calculate ySum
  const ySum = y * (Math.floor(z / y) * (Math.floor(z / y) + 1) / 2);
  // calculate lcmSum
  const leastMult = lcm(x,y);
  const lcmSum = leastMult * (Math.floor(z / leastMult) * (Math.floor(z / leastMult) + 1) / 2);
  // return xSum + ySum - lcmSum
  return xSum + ySum - lcmSum;
}
