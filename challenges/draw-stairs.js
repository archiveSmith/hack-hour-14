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
	let string = '';
	
	for (let i = 1; i <= 6; i++) {
		let line = '';
		let spaces = 6 - i;
		
		for (let i = 1; i <= spaces; i++) {
			line += ' ';
		}
		
		for (let j = 1; j <= i; j++) {
			line += '*';
		}
		console.log(line);
	}
}


module.exports = drawStairs;
