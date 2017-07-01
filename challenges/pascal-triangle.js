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

/*  pascalTriangle(6) :
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
  if(numRows === 0) return []
  if(numRows === 1) return [[1]]
  
  let pascal = [];

  for(let i=0; i<numRows; i++) {
    let row = [];
    
    for(let j=0; j<numRows; j++) {
      console.log("i", i, "j", j)
      
      //if first row, 1
      if(j===0){
        row.push(1)
        continue
      }
      let newele = row[j-1]* ((i +1 -j)/j)
      console.log('j is', j, 'new element', newele)
      if(newele) {
        row.push(newele)
      }
    }
    pascal.push(row)
  }
  return pascal;
}


module.exports = pascalTriangle;
