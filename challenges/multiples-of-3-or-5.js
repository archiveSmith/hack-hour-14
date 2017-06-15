'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  // const threesSum = 3 * (Math.floor(1000 / 3) * Math.floor(1000 / 3) + 1 / 2)
  // const fivesSum = 5 * (Math.floor(1000 / 5) * Math.floor(1000 / 5) + 1 / 2)
  // const fifteensSum = 15 * (Math.floor(1000 / 15) * Math.floor(1000 / 15) + 1 / 2)
  // return threesSum + fivesSum + fifteensSum


  let results = [];
  let total = 1000

  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) results.push(i)
  }

  return results.reduce(function(prev, curr) {
    return prev + curr
  })

}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {


  let results = [];


  for (let i = 1; i <= z; i++) {
    if (i % x === 0 || i % y === 0) results.push(i)
  }

  return results.reduce(function(prev, curr) {
    return prev + curr
  })
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
