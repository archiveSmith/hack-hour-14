/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******
<<<<<<< HEAD
*/

function drawStairs(n) {
    for(let i=1; i<=n; i++){
        let str = '';
        for(let j=i; j<n; j++){
            str += ' ';
        }
        for(let k=1; k<=i; k++){
            str += '*';
        }
        console.log(str);
    }
}
=======

*/

function drawStairs(n) {

}


>>>>>>> 8d64490be6d782e922ccc3b9574f2c5ca346c908
module.exports = drawStairs;
