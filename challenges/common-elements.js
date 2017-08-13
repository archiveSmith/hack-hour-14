// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array2 = [12, 'ferret'];
  // var array1  = ['dog', 12, 'ferret'];
  // var array3 = ['dog', 12, 'ferret', 3];
  // var array4 = ['dog', 'ferret', 12];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4) {
  // set output array
  const output = [];
  // loop through an array of arrays and get the longest array in it
  const arrs = [array1, array2, array3, array4];
  let longest = array1;
  arrs.forEach((el) => {
    if (el.length >= longest.length) {
      longest = el;
    }
  });
  // check each array and only push elements that are common to each array
  for (let i = 0; i < longest.length; i += 1) {
    if (array1.includes(longest[i]) && array2.includes(longest[i])
    && array3.includes(longest[i]) && array4.includes(longest[i])
    && !output.includes(longest[i])) {
      output.push(longest[i]);
    }
  }
  return output.length === 0 ? 'Nothing in Common' : output;
}

module.exports = commonElements;

// console.log(commonElements(array1, array2, array3, array4))
