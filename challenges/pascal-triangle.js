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
  let triangle = [[1]];
  let left,right;
  for(let i=1; i<=numRows; i++){
      var level = [];
    for(let j=1; j<=i;j++){
      let lastLevel = triangle[i-1].slice()
      lastLevel.push(0)
      lastLevel.unshift(0)
      left = lastLevel[j-1] || 0
      right = lastLevel[j] || 0
      level.push(+left + right)
    }
    triangle.push(level);
  }
  triangle.shift();
  return triangle
}

module.exports = pascalTriangle;
