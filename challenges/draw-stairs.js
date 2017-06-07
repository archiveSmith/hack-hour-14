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
<<<<<<< HEAD
    let retStr = ''
    for (let index = 1; index <= n; index++){
        let spaces = n-index;
        let asterisks = index;
        let currLine = '';
        while(spaces){
            spaces--;
            currLine += ' ';
        }
        while(asterisks){
            asterisks--;
            currLine += '*';
        }
        retStr = retStr + currLine + '\n';
    }
    console.log(retStr);
=======

>>>>>>> 8d64490be6d782e922ccc3b9574f2c5ca346c908
}


module.exports = drawStairs;
