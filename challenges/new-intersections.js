/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
    //check for two x coordinates that are the same.
    //check for two y coordinates that are the same.
    //^^find all the pairs. check for opposite pairs that are in its range
    let xPairs = {};
    let yPairs = {};
    for(let i=0; i<x.length-1; i++){
        for(let j=i+1; j<x.length; j++){
            if(x[i] === x[j]){
                xPairs[x[i]] = [y[i],y[j]].sort((a, b) => a-b);
            }
        }
    }
    for(let i=0; i<y.length-1; i++){
        for(let j=i+1; j<y.length; j++){
            if(y[i] === y[j]){
                yPairs[y[i]] = [x[i],x[j]].sort((a,b) => a-b);
            }
        }
    }

    let count = 0;
    for(let x in xPairs){
        for(let y in yPairs){
            if( x > yPairs[y][0] && x < yPairs[y][1] &&
                y > xPairs[x][0] && y < xPairs[x][1]){
                count++;
            }
        }
    }
    return count;
}
module.exports = newIntersections;
