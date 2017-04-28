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

function drawStairs(n,stairs = '',stars = 1) {
  if(!n) return stairs;
  let theseStairs = ' '.repeat(n - 1) + '*'.repeat(stars);
  return x(n - 1,stairs + theseStairs + '\n', stars + 1);


}


module.exports = drawStairs;
