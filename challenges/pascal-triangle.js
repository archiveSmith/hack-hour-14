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

  let store = [];
  if(numRows === 1){
    store[0] = [1];
    return store; 
  }
  
   if(numRows === 2){
    store[0] = [1];
    store[1] = [1,1]
  }

  
  if(numRows > 2){
    store[0] = [1];
    store[1] = [1,1]
  }

  for(let i = 1; i <= numRows-2; i++){
    let sub = [];
    sub.unshift(1); 
    for(let j = 0; j < store[i].length -1; j++){
      console.log('i value and j value',store[i][j])
      let temp = store[i][j] + store[i][j + 1];
      sub.push(temp)
    }
    sub.push(1);
    store.push(sub); 
  }
  return store;
}
module.exports = pascalTriangle;
