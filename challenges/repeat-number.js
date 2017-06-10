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
<<<<<<< HEAD
   let sorted = array.sort((a,b)=>a-b);
   for(i=0;i<sorted.length;i++){
       if(sorted[i]===sorted[i+1]){
           return sorted[i]
       }
   }
}

repeatNumbers([3,1,1,2])
=======

}

>>>>>>> bd030457b0e9f7a021bb578451d785803a1d195c
module.exports = repeatNumbers;
