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
  const x = reflect(+str[1])
  const y = reflect(+str[3])
  const x_distance = Math.max(3 - x, 0)
  const y_distance = Math.max(3 - y, 0)
  return jumps(x_distance + y_distance)
}

function jumps(d) {
  return 8 - (d < 2 ? 2 * d : d + 2)
}
function reflect(n) {
  return n > 4 ? 9 - n : n
}

module.exports = knightjumps;
