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

const l = console.log

function commonElements(array1, array2, array3, array4) {

  // loop through array 1 and check if any elements present in array2, 3 and 4
  return array1.reduce((a, v) => {
    l('a --> ', a)
    l('v --> ', v)
    if (array2.includes(v) && array3.includes(v) && array4.includes(v) && !a.includes(v)) {
      l('a in if --> ', a)
      l('v in if --> ', v)
      a.push(v)
    }
    return a
  }, [])

}


var array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
var array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
var array3 = [23, 12, 12, 77, 'ferret', 9, 88, 100, 'dog'];
var array4 = ['ferret', 12, 12, 45, 9, 66, 77, 78, 2000];

l(commonElements(array1, array2, array3, array4))

module.exports = commonElements;
