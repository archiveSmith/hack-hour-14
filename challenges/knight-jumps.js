// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

/*
    [  [1,1],  [2,1],   [3,1] ,  [4,1],  [5,1], [6,1],   [7,1], [8,1] ]
    [  [1,1],  .....]
    [  [1, 8] [1,8],  [2,8],   [3,8] ,  [4,8],  [5,8], [6,8],   [8,8]  ]
*/

function knightjumps(str) {
    let pos = str.split("")
    pos = pos.filter((el)=> /\d/.test(el))
    
    if(+pos[0]> 8 || +pos[0]< 1 ||  +pos[1]>8 ||  +pos[1]<1) return "enter position between 1 and 8"
    
    let x = +pos[0]
    let y = +pos[1]
    
    
    //get possible moves
    let available = [];
    available.push([x-2, y-1])
    available.push([x-1, y-2])
    available.push([x+1, y+2])
    available.push([x+2, y-1])
    available.push([x+2, y+1])
    available.push([x+1, y+2])
    available.push([x-1, y+2])
    available.push([x-2, y+1])
    
    //check which moves are within the board
    let moves = 0;
    available.forEach((move) => {
      if( 0 < move[0] && move[0] <=8 && 0 < move[1] && move[1] <= 8) {
        moves++
      }
    })
    
    return moves;


}

// let s = "(7 1)"
// knightjumps(s)
module.exports = knightjumps;
