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
  if (!Number.isInteger(numRows) || numRows < 1) return 'invalid'

  const triangle = [[1]]

  for (let i = 1; i < numRows; i++) {
    const newRow = [1]
    const prevRow = triangle[triangle.length - 1]
    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j] + prevRow[j - 1])
    }
    newRow.push(1)
    triangle.push(newRow)
  }

  return triangle




  // const result = [];
  // result[0] = [1];
  // result[1] = [1, 1];
  // for (let row = 2; row < numRows; row++) {
  //   result[row] = [1];
  //   for (let col = 1; col <= row - 1; col++) {
  //     result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
  //     result[row].push(1);
  //   }
  // }
  // return result;

}

module.exports = pascalTriangle;
