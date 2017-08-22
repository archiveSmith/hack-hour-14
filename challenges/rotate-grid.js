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

// O of N2 time complexity
// O of N space complexity

function rotateGrid(grid, n) {
  // declare output grid
  const newGrid = [];
  // set a var j = 0
  let j = 0;
  while (j !== n) {
    // loop through curr Grid
    for (let i = 0; i < grid.length; i += 1) {
      // push in n empty arrays for the newGrid if array does not exist yet
      if (!newGrid[i]) newGrid.push([]);
      // unshift the ith element of the jth row to each of rows in the newGrid
      newGrid[i].unshift(grid[j][i]);
    }
    // increment j
    j += 1;
  }
  // return new Grid
  return newGrid;
}

// ALTERNATIVE SOLUTION push one complete row at a time.

// function rotateGrid(grid, n) {
//   var newGrid = [];
//   for (var i = 0; i < n; i++) {
//     var newRow = [];
//     // gets all the rows from the column
//     // starting from the bottom row
//     for (var j = n-1; j >= 0; j--) {
//       newRow.push(grid[j][i]);
//     }
//     newGrid.push(newRow);
//   }
//   return newGrid;
// }
module.exports = rotateGrid;

// const sampleGrid = [[1, 2, 3, 3.5], [4, 5, 6, 6.5], [7, 8, 9, 9.5], [10,11,12,13]]
// console.log(rotateGrid(sampleGrid, 4));
