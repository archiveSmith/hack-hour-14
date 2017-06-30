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

function newIntersections(x, y) {
    if (x.length === 0 || y.length === 0) return 0
    let horizontal = {};
    let vertical = {};
    let counter = 0;
    x.forEach(function (ele, i) {
        if (vertical[ele]) {
            if (typeof vertical[ele] == "number") {
                vertical[ele] = [vertical[ele],y[i]].sort((a,b)=> {return a-b})
            }
            else{
                if(y[i]<vertical[ele][0]) vertical[ele][0] = y[i]
                if(y[i]>vertical[ele][1]) vertical[ele][1] = y[i]
            }
        }
        else{
            vertical[ele]= y[i]
        }
    });
    y.forEach(function (ele,i) {
        if (horizontal[ele]) {
            if (typeof horizontal[ele] == "number") {
                horizontal[ele] = [horizontal[ele],x[i]].sort((a,b)=> {return a-b})
            }
            else{
                if(x[i]<horizontal[ele][0]) horizontal[ele][0] = x[i]
                if(x[i]>horizontal[ele][1]) horizontal[ele][1] = x[i]
            }
        }
        else{
            vertical[ele]= x[i]
        }
    });
    for(let line in vertical){
        if
    }
    return counter;
}

module.exports = newIntersections;
