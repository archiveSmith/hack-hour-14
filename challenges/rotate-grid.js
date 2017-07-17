/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
 * the ith row in the grid.
 *
 * Write a function to rotate the grid 90 degrees clockwise.
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *
 *                  rotateGrid(sampleGrid, 3);
 *
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

 // array 0 index 0 -> array 0 index 2
 // indexes of 0 go into array 0
 //indexes of 1 go into array 1
 //indexes of 2 going into array 2

 //index becomes 2, 1, 0

 // var newGrid = [];
 // var rowLength = Math.sqrt(grid.length);
 // newGrid.length = grid.length
 //
 // for (var i = 0; i < grid.length; i++)
 // {
 //     //convert to x/y
 //     var x = i % rowLength;
 //     var y = Math.floor(i / rowLength);
 //
 //     //find new x/y
 //     var newX = rowLength - y - 1;
 //     var newY = x;
 //
 //     //convert back to index
 //     var newPosition = newY * rowLength + newX;
 //     newGrid[newPosition] = grid[i];
 // }
 //
 // for (var i = 0; i < newGrid.length; i++)
 // {
 //     console.log(newGrid[i])
 // }



function rotateGrid(grid, n) {
  var newGrid = [];
  var rowLength = Math.sqrt(grid.length);
  var newGrid.length = grid.length; 

  // for (var i = 0; i < grid.length; i++)
  // {
  //     //convert to x/y
  //     var x = i % rowLength;
  //     var y = Math.floor(i / rowLength);
  //
  //     //find new x/y
  //     var newX = rowLength - y - 1;
  //     var newY = x;
  //
  //     //convert back to index
  //     var newPosition = newY * rowLength + newX;
  //     newGrid[newPosition] = grid[i];
  // }
  //
  // for (var i = 0; i < newGrid.length; i++)
  // {
  //     console.log(newGrid[i])
  // }

  return newGridLength;

}
//
// * For example:     sampleGrid before:  [   [1, 2, 3],
// *                                          [4, 5, 6],
// *                                          [7, 8, 9]  ]
// *
// *                  rotateGrid(sampleGrid, 3);
// *
// *                  sampleGrid after:   [   [7, 4, 1],
// *                                          [8, 5, 2],
// *                                          [9, 6, 3]  ]

let sampleGrid =[   [1, 2, 3], [4, 5, 6], [7, 8, 9]  ]

console.log(rotateGrid(sampleGrid, 3));
module.exports = rotateGrid;
