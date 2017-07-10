// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(...arrays){
  //output array
  const output = [];
  //sort by arrays by length
  const sorted = arrays.sort((a,b)=> a.length - b.length)
  //take shortest
  const shortest = sorted[0]
  // check each element against the other 3 arrays using .includes
  shortest.forEach((el)=>{
    let count = 0;
    for(let i = 1; i < 4; i++) {
      sorted[i].includes(el) ? count++ : null;
    }
    //if all other arrays contain it, add to output array
    if(count === 3 && !output.includes(el)) {
      output.push(el)
    }
  })
  return output
}

module.exports = commonElements;
