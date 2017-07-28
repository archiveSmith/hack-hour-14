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

function pascalTriangle(numRows) {
  let result = [];

  for (let n = 0; n < numRows; n++) { 
    result[n] = new Array(n+1);
    
    for (let k = 0; k < n+1; k++) {            
      if (k === 0 || k === n) {
        result[n][k] = 1;
      } else {
        result[n][k] = result[n-1][k-1] + result[n-1][k];
      }
    }
  }
  console.log(result)
}

pascalTriangle(50)

module.exports = pascalTriangle;
