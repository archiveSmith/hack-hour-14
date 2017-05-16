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
  var space = ' ';
  var stair = '*';
	for(i=0;i<=n; i++){
	    string=(space.repeat(n-i)+stair.repeat(i));
	  console.log(string)
	}
}

drawStairs(6)

module.exports = drawStairs;
