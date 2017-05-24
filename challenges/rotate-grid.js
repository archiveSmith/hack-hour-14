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
    let holder;
    for (let i=0; i<Math.ceil(n/2);i--){
        holder = grid.slice(i,i+1);
        for(let j=i; j<=(n-1)-i; j++){
            grid[i][j]= grid[(n-1)-j][i];
            grid[(n-1)-j][i]= grid[(n-1)-i][(n-1)-j];
            grid[(n-1)-i][(n-1)-j]= grid[(n-1)-j][(n-1)-i]
            grid[(n-1)-j][(n-1)-i]= holder[(n-1)-j]
        }
        // grid[i][i]= grid[n-i][i];
        // grid[n-i][i]= grid[n-i][n-i];
        // grid[n-i][n-i] = grid[i][n-i];
        // grid[i][n-i] = holder;
    }
    return grid;
}
module.exports = rotateGrid;







// GeoReminder (Poyu, Aaron, Eva)-- Symantic UI
// FutureMeals (Allysa, Li, Jacob, Doug) -- recipe Gen
// LearningPlan (Luke, Josh, Eddie)
