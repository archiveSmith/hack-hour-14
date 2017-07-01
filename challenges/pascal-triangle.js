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
  if (numRows === 0) {
    return [];
  }
  
  let output = [[1]];

  for (let i = 1; i < numRows; i += 1) {
    let row = [1];
    for (let j = 1; j < i; j += 1) {
      row.push(output[i-1][j-1] + output[i-1][j]);
    }
    row.push(1);
    output.push(row);
  }
  
  return output;
}

module.exports = pascalTriangle;
