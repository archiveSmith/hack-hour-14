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
function rotateGrid(grid, n) {
    // take the transpose of the grid
    let temp;
    for (let i=0 ; i<n ; i++){
    	for (let j=0 ; j<n ; j++){
    		if(i>j){
	  			temp = grid[i][j];
	  			grid[i][j] = grid[j][i];
	  			grid[j][i]=temp;
    		}
    	}
    }
    // reverse each row of the transposed grid
    for (let i=0 ; i<n ; i++) grid[i].reverse();
    return grid;
}

module.exports = rotateGrid;