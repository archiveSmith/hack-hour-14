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
    let len = array.length;
    for(let index = len-1; index >= len/2; index--){
        let front = array[len-index-1];
        let back = array[index];
        array[len-index-1] = back;
        array[index] = front;
    }
    return array;
}

module.exports = reverseInPlace;
