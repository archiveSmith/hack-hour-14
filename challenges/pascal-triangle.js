/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

const l = console.log

function pascalTriangle(numRows) {

  // create the top of the triangle
  const tri = [[1]];
  // loop over the number of rows
  for (let i=1 ; i<numRows ; i++) {
    // push a new row to the triangle
    tri.push([1,1])
    // loop over the previous row
    for (let j=0 ; j<tri[i-1].length-1 ; j++){
      // sum the two values above the current value
      let sumAbove = tri[i-1][j] + tri[i-1][j+1]
      // splice it in the current row
      tri[i].splice(tri[i].length-1, 0, sumAbove)
    }
  }
  return tri;
}

l(pascalTriangle(6))

module.exports = pascalTriangle;
