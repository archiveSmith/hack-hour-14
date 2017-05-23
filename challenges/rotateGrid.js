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
let grid = [   [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]  ]

function rotateGrid(grid, n) {
  let output = [];
  for(i=0;i<grid.length;i++){
    output.push([])
  }
    for(var i = 0; i < grid[0].length; i++){
      for(var j = 0; j < grid.length; j++){
        output[i][j] = grid[n-1-j][i];
      }
    }
    
    console.log(output)
        
}
console.log(rotateGrid(grid, 3))

module.exports = rotateGrid;