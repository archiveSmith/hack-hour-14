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
    outputString = "";
    for(let i = 1; i<=n; i++){
        let space = ''
        for(j = n-i; j > 0; j--){
            space += " "
        }
        outputString += '*'
        console.log(space+outputString);
    }
}

drawStairs(9);

module.exports = drawStairs;
