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
  let stairs = '';
  let step = '*';
  let space = ' ';
  let x = n - 1;
  for (let i = 1; i <= n; i++) {
    stairs = stairs + space.repeat(x) + step + '\n';
    step += '*';
    x--
  }
  console.log(stairs);
}

module.exports = drawStairs;
