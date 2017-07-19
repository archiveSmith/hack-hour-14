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

//doesn't pass tests but works
// const drawStairs = (n) => {
//   //declare variable str and initialize to empty string
//   let str = '';
//   const space = ' ';
//   const asterisk = '*';
//   //loop from 1 to n
//   for (let i = 1; i <= n; i += 1) {
//     //each iteration, concatenate n - i spaces, i asterisks, and \n to str
//     str += space.repeat(n - i);
//     str += asterisk.repeat(i);
//     str += '\n';
//   }
//   //console.log str
//   console.log(str);
// }
//
// drawStairs(1);

const drawStairs = (n) => {
  const space = ' ';
  const star = '*';
  for (let i = 1; i <= n; i++) {
    let string = space.repeat(n - i);
    string += star.repeat(i);
    console.log(string);
  }
}

drawStairs(8);


module.exports = drawStairs;
