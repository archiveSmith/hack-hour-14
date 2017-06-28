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

function anagrams(string, build = [], allAnagrams = []) {
  if (string.length === 0) {
    return allAnagrams.push(build);
  }
  
  for (let i = 0; i < string.length; i += 1) {
    anagrams(string.slice(0, i).concat(string.slice(i+1)), build.concat(string[i]), allAnagrams);
  }
  
  return allAnagrams;
}

module.exports = anagrams;
