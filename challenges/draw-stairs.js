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
  for (var i=0; i<n; i++){
    var char = '';
    var next = i;
    for (var j=0; j<next-i; j++){
      char += '*';
    }
    for (var k=0; k<next; k++){
      char += '*';
    }
  }
  return char;
}


module.exports = drawStairs;
