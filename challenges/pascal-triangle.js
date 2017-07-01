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
  if (numRows === 1) return [[1]]
  else if (numRows === 2) return [[1], [1, 1]]
  // add first two elements of the [1,1] array and insert it in the in the middle of the indices of its addends
  else {
    let pascal = [[1], [1, 1]];
    let start = pascal[1];
    while (pascal.length !== numRows) {
      let copy = start.slice()
      for (let i = 0; i < start.length - 1; i += 1) {
        let j = i + 1;
        let sum = start[i] + start[j];
        copy.splice((i + 1), 0, sum);
      }
      let filtered = copy.filter((el) => { return el === 1 || !start.includes(el) })
      pascal.push(filtered);
      start = filtered;
    }
    return pascal;
  }
}

// console.log(pascalTriangle(6));

module.exports = pascalTriangle;
