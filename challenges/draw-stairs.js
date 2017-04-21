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
    for (let i = 1; i <= n; i++) {
        const whiteSpaceCount = n - i; // # of white space preceeding stair
        const whiteSpace = repeatChar(' ', whiteSpaceCount); // ret string with whitespace
        const stair = repeatChar('*', i);
        console.log(whiteSpace + stair);
        //create whitespace
        //create stairs(*)
        // join and console log
    }

    function repeatChar(char, count) {
        let output = '';

        for (let i = 0; i < count; i++) {
            output += char;
        }

        return output;
    }
}


drawStairs(4);

module.exports = drawStairs;
