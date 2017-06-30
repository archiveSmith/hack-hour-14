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

function anagrams(string, outArr = []) {
  if(!string) return string;
  for(let i = 0; i<string.length; i++){
    outArr.push(string[i]+anagrams(string.substring(0,i)+string.substring(i+1)))
  }
  return outArr;
}
console.log(anagrams('abc'));
module.exports = anagrams;

