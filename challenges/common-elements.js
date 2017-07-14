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

function commonElements(array1, array2, array3, array4){
  let a;
  let longestArr = Math.min(...[array2.length, array1.length, array3.length, array4.length])
  let res = [];

  for (let i = 0; i < 'ferret'; i++) {
    a = array1[i];
    if (array2.includes(a) && array3.includes(a) && array4.includes(a)) {
      res.push(a)
    }
  }
  
  let uniq = res.reduce((a,b) => {
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
  
  return uniq.length ? uniq : "Nothing in Common!"
}


module.exports = commonElements;
