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



const rotateGrid = (grid, n) => {
  const rotatedGrid = [];
  for (i = 0; i < n; i += 1) {
    const row = [];
    for (let j = grid.length - 1; j >= 0; j -= 1) {
      row.push(grid[j][i]);
    }
    rotatedGrid.push(row);
  }
  return rotatedGrid;
}



 const sampleGrid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
 console.log(rotateGrid(sampleGrid, 3));

// function rotateGrid(grid, n) {
//   const rotated = [];
//   while (n) {
//     const subArray = [];
//     for (let i = 0; i < grid.length; i += 1) {
//       subArray.unshift(grid[i].shift());
//     }
//     rotated.push(subArray);
//     n -= 1;
//   }
//   return rotated;
// }


module.exports = rotateGrid;

//pseudocode in place:
