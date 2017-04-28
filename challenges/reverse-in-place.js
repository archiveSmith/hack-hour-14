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
    //figure out edge cases
    if(!Array.isArray(array)){return undefined}
    if (array.length === 0 || array === undefined) return [];

    //figure out the value at both the end and beginning of array
    let index = 0;
    while(index < array.length - 1 - index){

        let val1 = array[index]
        let val2 = array[array.length - 1 - index]

        //reassign array values with reverse value
        array[index] = val2;
        array[array.length - 1 - index] = val1;

        index++;
    }
    return array;
}


module.exports = reverseInPlace;
