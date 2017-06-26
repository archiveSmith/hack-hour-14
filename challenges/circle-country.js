/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

const l = console.log;

function Tree(x, y, r, i) {
    this.x = x
    this.y = y;
    this.r = r;
    this.i = i;
    this.children = [];
}

function checkIfNested(x, y, r, X, Y, R) {
    return Math.sqrt(Math.pow(x - X, 2) + Math.pow(y - Y, 2)) < R
}

function populateTreeArr(x, y, r, i, treeArr) {
    for (let j=0 ; j<treeArr.length ; j++){
        if (checkIfNested(x, y, r, treeArr[j].x, treeArr[j].y, treeArr[j].r)) {
            return populateTreeArr (x, y, r, i, treeArr[j].children)
        }
    }
    return treeArr.push(new Tree (x, y, r, i))
}


function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {

    console.log('arguments', [...arguments])
    const treeArr = [];
    for (let i = 0; i < x.length; i++) {
        populateTreeArr(x[i], y[i], r[i], i, treeArr)
    }
    return treeArr
}


const x = [0, 6];
const y = [0, 0];
const r = [1, 2];
const start_x = 0;
const start_y = 0;
const end_x   = 6;
const end_y   = 0;
l(circleCountry(x, y, r, start_x, start_y, end_x, end_y))

// l(checkIfNested (0,0,2,   6,0,2))

// function findCoords (xi, yi, ri, xArr, yArr, zArr){

// }




module.exports = circleCountry;
