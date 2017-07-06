// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"
function isOnBoard(x, y){
    return x<=8 && x>=1 && y<=8 && y>=1;
}

function knightjumps(str) {
    let x = +str[1];
    let y = +str[3];
    let moves = 0;
    for( let i = 1, j = 2, count = 0; count < 4; i *= -1, j = count === 1 ? -j : j, count++ ){
        moves += isOnBoard(x+i, y+j) ? 1 : 0;
        moves += isOnBoard(x+j, y+i) ? 1 : 0;
    }
    return moves;
}

module.exports = knightjumps;
