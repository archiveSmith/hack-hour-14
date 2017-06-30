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
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; i++) {
            let currentX = x[i];
            let currentY = y[i];
            if (x.indexOf(i + 1) == y.indexOf(j - 1)) {
                if (x.indexOf(i + 2) == y.indexOf(j + 1)) {
                    if (x.indexOf(i + 1) == y.indexOf(j + 1)) {
                    }
                }
            }
        }
    }
}








module.exports = newIntersections;
