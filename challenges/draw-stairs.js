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

//row, column -2 for lopps. for each row, start with n-1 spaces and 1 star
function drawStairs(n) {
	let output = '';
	//for each colulms
	for(let row=0; row<n; row++) {
		for(let col= 0; col < n; col ++) {
			if( col < n-row -1) {
				output+= " ";
			}
			else if ( col >= n-row-1) {
				output+= "*"
			}
			if( col === n-1) {
				output+= " \n";
			}
		}
	}
	return output;
}


module.exports = drawStairs;
