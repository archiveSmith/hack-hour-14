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
  const step = '*';
  const space = ' ';
  let x = n - 1;
  for (let i = 1; i <= n; i++) {
    // console.log(space.repeat(x) + step.repeat(i));
    x--;
  }
}

// to do: staircase needs to get reversed
// each line has to add an appropriate number of white spaces and decrement as n increases.


module.exports = drawStairs;

// drawStairs(6);
