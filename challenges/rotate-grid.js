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
 
let grid = [  [1,2,3],
              [4,5,6],
              [7,8,9] ]


function rotateGrid(grid, n) {
  let newGrid = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = n - 1; j >= 0; j--) {
      temp.push(grid[j][i])
    }
    newGrid.push(temp)
  }
  return newGrid;
}
rotateGrid(grid)


//done in place o(n) space complexity
function rotateGrid(grid, n) {
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let first = i;
    let last = n - 1 - i;

    for (let j = first; j < last; j++) {
      let adjust = j - first;
      let top = grid[first][j];

      grid[first][j] = grid[last - adjust][first];
      grid[last - adjust][first] = grid[last][last - adjust];
      grid[last][last - adjust] = grid[j][last];
      grid[j][last] = top;
    }
  }
  return grid;
}

// let grid = [
//   [0,0], [0,1], [0,2], [0,3],
//   [1,0], [1,1], [1,2], [1,3],
//   [2,0], [2,1], [2,2], [2,3],
//   [3,0], [3,1], [3,2], [3,3]
// ]; 

// function rotate90(grid) {
//   let newGrid = [];
//   let rowLen = Math.sqrt(grid.length); //4

//   for (let i = 0; i < grid.length; i++) {
//     //convert to x/y
//     let x = i % rowLen;
//     let y = Math.floor(i / rowLen);

//     //find new x/y
//     let newX = rowLen - y - 1;
//     let newY = x;

//     //convert back to index
//     let newPosition = newY * rowLen + newX;
//     newGrid[newPosition] = grid[i];
//   }
//   return newGrid;
// }

// rotate90(grid)