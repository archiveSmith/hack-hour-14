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
 function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

 function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function newIntersections(x, y){
    let count;
    
    let oldCoords = x.reduce((acc, xval, index) => {
        if(acc.hasOwnProperty(xval)) {
          acc[xval].push(y[index])
          return acc;
        }
        else {
          acc[xval] = [y[index]]
          return acc;
        }
      }, {})
      
      console.log("old", oldCoords)
      
    //find 2 points with same x (directly above/below each other)
    let dups = []
    for(x in oldCoords) {
      if(oldCoords[x].length > 1) {
        dups.push([x, oldCoords[x]])
      }
    }
  
  //get their y-values (this will define upper and lower bounds for the new points)
    console.log("duplicates", dups)
    let xlock = dups[0][0]
    let ymin = getMinOfArray(dups[0][1])
    let ymax = getMaxOfArray(dups[0][1])
    
    console.log("y min", ymin, "ymax", ymax)
    
    //for each possible y value between that range:
    for(let i=1; i<=8; i++) {
        let right;
        let left;
        //check if there are OLD points to the left AND right 
      console.log(xlock, i)
        // such that one  x1-value < curr-point < x2-value
            //increment count
    }

//return count.
}


let xar = [1, 5, 3, 3, 3, 6]
let yar = [2, 0, 1, 8, 3 , 7]

newIntersections(xar, yar)

module.exports = newIntersections;
