// Have the function knightjumps(str) read str which will be a
<<<<<<< HEAD
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on 
//the board.

// The structure of str will be the following string: "(x y)" which represents the position of the 
// knight with x and y ranging from 1 to 8.


// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 
// different spaces
=======
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
>>>>>>> c6106ce6537288ed53175b060628c747d496b5d5
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
<<<<<<< HEAD
    //up 2 over 1
    //from position it moves y axis 2
    //from posiition it movex x axis over 1

    //count how many spaces the knight can move
    let count = 8; 

    //seperate x and y points
     str = str.replace(/\(/,'').replace(/\)/,'').split(' ');
    let x = Number(str[0]);
    let y = Number(str[1]);
     
    //add to count if coordinates are greater than -1 and less than 9
    //top moves
        //add 2 to y, add 1 to x and subtract 1 from x  
    //bottom moves
        //subtract 2 from y, add 1 to x and subtract 1 from x
    //right moves
        //add 2 to x, subtract 1 from y and add 1 to y
    //left moves 
        //subtract 2 from x, subtract 1 from y and add 1 to y
  
    
//       if(y + 2 < 9 && y + 2 > -1){
//         if(x + 1 < 9 && x + 1 > -1){
//           count++
//         }
//         if(x - 1 < 9 && x - 1 > -1){
//           count++
//         }
//       }
  
  if (x + 2 > 8 || y + 1 > 8) count -= 1
  if (x + 2 > 8 || y - 1 < 1) count -= 1
  if (x - 2 < 1 || y + 1 > 8) count -= 1
  if (x - 2 < 1 || y - 1 < 1) count -= 1
  if (x + 1 > 8 || y + 2 > 8) count -= 1
  if (x + 1 > 8 || y - 2 < 1) count -= 1
  if (x - 1 < 1 || y + 2 > 8) count -= 1
  if (x - 1 < 1 || y - 2 < 1) count -= 1
     
     //return count
     return count;
}

module.exports = knightjumps(str);


// function knightjumps(str) {
//   if (str.includes('8') && str.includes('1') || str.includes('1 1') || str.includes('8 8')) {
//     return 3;
//   }

//   if (str.includes('1') || str.includes('8')) {
//     return 5;
//   }
  
//   return 8;
// }


=======

}

module.exports = knightjumps;
>>>>>>> c6106ce6537288ed53175b060628c747d496b5d5
