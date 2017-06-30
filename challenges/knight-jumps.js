// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let x = +str[1];
  let y = +str[3];
  // console.log('x', x);
  // console.log('y', y);
  const moves = [[-2, -1], [-2, +1], [+2, -1], [+2, +1], [-1, +2], [+1, +2], [-1, -2], [+1, -2]];
  let counter = 0;
  for (let i = 0; i < moves.length; i += 1) {
    // console.log(x + moves[i][0])
    // console.log(y + moves[i][1])
    if (x + moves[i][0] > 0 && y + moves[i][1] > 0) {
      counter += 1;
      console.log('added')
    } else {
      console.log('skipped')
    }
  }
  return counter;
}

console.log(knightjumps("(1 1)"));

module.exports = knightjumps;
