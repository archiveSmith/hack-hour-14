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
    let x = 0;
    let y = 0;
    let factor1 = n-1;
    let factor2 = 0;
    let temp = grid[x][y];
    let last = grid[x][y];

    for(let index = 0; index < factor1-1; index++) {
        // first exchange
        x=x+factor1;
        y=y+factor2;
        last = grid[x][y];
        grid[x][y] = temp;
        temp = last;

        // second exchange
        x = x-factor2;
        y = y+factor1;
        last = grid[x][y];
        grid[x][y] = temp;
        temp = last;

        // third exchange
        x = x-factor1;
        y = y=factor2;
        last = grid[x][y];
        grid[x][y] = temp;
        temp=last;

        // final exchange
        x = x+factor2;
        y = y-factor1;
        last = grid[x][y];
        grid[x][y] = temp;
        temp = last;


        factor1 = factor1 - 1;
        factor2 = factor2 + 1;
    }
    return grid;
}

module.exports = rotateGrid;
