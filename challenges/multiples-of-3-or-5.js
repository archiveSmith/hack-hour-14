'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;

<<<<<<< HEAD
  for (let i = 3; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i; 
    }
  }

  return sum;
}

 
=======
  return sum;
}

>>>>>>> 85a089bf76423d578140215a9467a24054b0f8b8

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

<<<<<<< HEAD
  for (let i = 1; i < z; i++){
    if(i % x === 0 || i % y === 0){
      sum += i; 
    }
  }

  return sum;
}


=======
  return sum;
}

>>>>>>> 85a089bf76423d578140215a9467a24054b0f8b8
const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
