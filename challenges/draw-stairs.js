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
  //Enter your code here
     var stair = ''
     for (var i = 0; i < n; i++) {
         var whitespace = '';
         var wsLength = n - 1 - i;
         for (var j =0; j < wsLength; j++){
             whitespace += ' ';
         }

         stair += '*'
         console.log (whitespace + stair);

     }
     return ''
}

console.log(drawStairs(8))
module.exports = drawStairs;
