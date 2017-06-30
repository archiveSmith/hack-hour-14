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
  let temp = str.replace(/\((\d) (\d)\)/g, '$1,$2').split(',')
  return calcJumps({x: +temp[0], y: +temp[1]})
}

const calcJumps = ({ x, y }) => {
  let result = []
  result.push({x: x - 2, y: y + 1})
  result.push({x: x - 2, y: y - 1})
  result.push({x: x + 2, y: y + 1})
  result.push({x: x + 2, y: y - 1})

  result.push({x: x - 1, y: y + 2})
  result.push({x: x - 1, y: y - 2})
  result.push({x: x + 1, y: y + 2})
  result.push({x: x + 1, y: y - 2})
  return result.filter(cur => cur.x > 0 && cur.y > 0 && cur.x <= 8 && cur.y <= 8).length
}

module.exports = knightjumps;
