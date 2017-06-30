

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

const l = console.log

function newIntersections(x, y) {

    const xStore = [];
    const yStore = [];
    let intersections = 0;

    const horizontalIndices = [];
    const verticalIndices = [];

    for (let i = 0; i < x.length; i++) {
        let arr = x.slice(0, i)
        if (arr.indexOf(x[i]) !== -1) horizontalIndices.push(arr.indexOf(x[i]), i);
    }

    for (let i = 0; i < y.length; i++) {
        let arr = y.slice(0, i)
        if (arr.indexOf(y[i]) !== -1) verticalIndices.push(arr.indexOf(y[i]), i);
    }

    l('horizontalIndices --> ', horizontalIndices)
    l('verticalIndices --> ', verticalIndices)

    return;

}

const x = [2, 2, 1, 9];
const y = [2, 5, 4, 4];

console.log(newIntersections(x, y))

module.exports = newIntersections;
