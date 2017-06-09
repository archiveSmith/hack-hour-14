/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    array = array.sort();
    let lastNum;
    for (let index = 0; index < array.length; index++){
        if (lastNum === array[index])
            return lastNum;
        else
            lastNum = array[index];
    }
}

module.exports = repeatNumbers;
