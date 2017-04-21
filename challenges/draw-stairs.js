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
	let string = Array(n).join(" ");
	for (let i=1 ; i<=n ; i++){
		string = string.slice(0,n-i) + "*" + string.slice(n-i+1,n);
		console.log(string);
	} 
}


module.exports = drawStairs;
