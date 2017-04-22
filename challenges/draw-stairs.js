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

*/

function drawStairs(n) {
   var count = n*1;
   var i;
   for (i = count; i >= 0 ; i--) {
       if (i !== n) {
           console.log(new Array(i+1).join(' ') + new Array(n-i+1).join('*'));
       }
   }
}

console.log(drawStairs(8))
module.exports = drawStairs;
