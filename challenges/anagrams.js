/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// abc, bca, cab
// cba, bac, acb
// [ 'abc', 'cba', 'cab', 'acb', 'bca', 'bac' ]


function anagrams(string) {
  const rev = string.split('').reverse().join('')
  const res = []
  for (let i = 0; i < string.length; i++) {
    res.push(shiftStr(string, i), shiftStr(rev, i))
  }
  return res
}

const shiftStr = (string, times) => {
  return (times === 0) ? string : shiftStr(string.substr(-1) + string.substr(0, string.length - 1), times - 1)
}

module.exports = anagrams;
