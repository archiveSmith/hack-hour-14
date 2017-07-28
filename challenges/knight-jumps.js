// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

//Still needs some work??
function knightjumps(str) {
  let x = parseInt(str[1]);
  let y = parseInt(str[3]);
  let counter = 0;
  let arr = [];

  arr.push([x-2, y-1])
  arr.push([x-2, y+1])
  arr.push([x+2, y+1])
  arr.push([x+2, y-1])
  arr.push([y+2, x-1])
  arr.push([y+2, x+1])
  arr.push([y-2, x+1])
  arr.push([y-2, x-1])
  console.log(arr)
  
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i][0] <= 7 && arr[i][1] <= 7) && (arr[i][0] > 0 && arr[i][1] > 0)) {
      console.log('hello')
      counter++
    }
  }
  return counter;
}

module.exports = knightjumps;
