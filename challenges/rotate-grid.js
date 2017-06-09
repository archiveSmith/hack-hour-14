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

//NOT IN PLACE
// function rotateGrid(grid, n){
//     return grid.reduceRight((outGrid, row, i) => {
//         row.forEach((val, j) => {
//             i===n-1 ? outGrid.push([val]) : outGrid[j].push(val);
//         })
//         return outGrid;
//     },[])
// }

//IN PLACE
function rotateGrid(grid, n) {
    let shells = Math.floor(n/2);
    let half = Math.ceil(n/2)-1;
    let math = [[0,1][1,0][0,-1][-1,0]]
    // function shell(start, length){
    //     if(start===half) return;
    //     return shell(start+1, start-1);
    // }
    for(let i=0; i<half; i++){
        for(let j=0; j<4; j++){
            let temp;
        }
    }
    return shell(0,n)

}
// module.exports = rotateGrid;

console.log(rotateGrid([[1, 2, 3],[4, 5, 6],[7, 8, 9]], 3))