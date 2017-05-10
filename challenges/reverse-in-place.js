'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
<<<<<<< HEAD
  let len = array.length
  if (len === 0 || !array){
    return [];
  }

  //remove elements from the end and insert at the beginning
  while(len--){
    array.unshift(array.pop())
  }

  return array

=======
>>>>>>> 08cbd72e2485516a7f508be8df267916de71f1ba

}

module.exports = reverseInPlace;
