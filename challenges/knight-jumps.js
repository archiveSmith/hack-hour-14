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
    
    let available = {'top':0, 'topright':1, 'topleft':2, 'left':3, 'right':4, 'bottomleft':5, 'bottomright':6, 'bottom':7}
    
    //x = 1 ---> no left,   no top-left  no bottom-left
    if(pos[0] === "1") {
      delete available.left
      delete available.topleft
      delete available.bottomleft
    }
    //x = 8 ----->  no right, no top-right, no bottom-right
    else if(pos[0] === "8") {
      delete available.right
      delete available.topright
      delete available.bottomright
    }
    //y = 1 --->  no top,   no top-left,   no top-right
    if(pos[1] === "1") {
      delete available.top
      delete available.topleft
      delete available.topright
    }
    //y = 8 ---->   no bottom, no bottom-left , no bottom-right
    else if(pos[1] === "8") {
      delete available.bottom
      delete available.bottomleft
      delete available.bottomright
    }
    return Object.keys(available).length
}

// let s = "(0 1)"
// knightjumps(s)
module.exports = knightjumps;
