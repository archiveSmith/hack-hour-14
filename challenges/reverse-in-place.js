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
function swap(index1, index2, array) {
    let temp = array[index1];
    array[index1]= array[index2];
    array[index2] = temp;

}

//to reverse we create 2 pointers, one  at the start and  one at the end of array
// the two pointers will tend towards the middle and keep swapping until they meet each other
function reverseInPlace(array) {
    if(!array.length) return array;
    if(array.length === 1) {
        return array;
    }
    //pointer starting at first incrementing
    let i = 0;
    //pointer starting at last decrementing
    let j = array.length-1;

    //middle of array
    let mid = Math.floor((array.length/2));

    for(let c=0; c < mid; c++) {
        //swap elements
        swap(i,j,array);

        //update i and j
        i = i+1;
        j = j-1;
    }
    return array;

}

reverseInPlace(['h','e','l','l','o']);

module.exports = reverseInPlace;
