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
  let space = ' ';
  let star = '*';
  for (let i = 1; i <= n; i++) {
    let string = space.repeat(n - i);
    string += star.repeat(i);
    console.log(string);
  }
}

drawStairs(6);


module.exports = drawStairs;
