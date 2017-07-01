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

const pascalTriangle = (numRows) => {
  let result = []
  for (let i = 0; i < numRows; i += 1) {
    let inner = []
    for (let j = 0; j <= i; j += 1) {
      if (j === 0) inner.push(1)
      else if (j === i) inner.push(1)
      else if (i >= 2) {
        inner.push(result[i - 1][j - 1] + result[i - 1][j])
      }
    }
    result.push(inner)
  }
  return result
}

module.exports = pascalTriangle;
