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

function anagrams(string) {

  // base case
  if (string.length < 2) return string;

  const permutations = [];
  let char;
  let remainingString;

  for (let i=0 ; i<string.length ; i++){

    char = string[i];
    if (string.indexOf(char) != i) continue;
    remainingString = string.slice(0,i) + string.slice(i+1,string.length);
    for (let subPermutation of anagrams(remainingString)) permutations.push(char+subPermutation)

  }

  return permutations;

}

var result = anagrams('abc');
console.log(result);  // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]


module.exports = anagrams;
