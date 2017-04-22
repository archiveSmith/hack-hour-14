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
    if (n < 1 || n > 100) return console.log('not a valid input')
    let output=new Array(n)
    let string =""
    output.fill(" ")
    for (let i=n-1; i>=0;i--){
        output[i]="*"
        string+=(output.join(''))
        if(!(i===0){
            string = string +'\n'
        }
    }
    console.log(string)
}

module.exports = drawStairs;
