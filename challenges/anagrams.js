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
  let result = [];
  let stringArr = string.split("")
  const permute = (str, m = []) => {
  	console.log(str);
    if (str.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < str.length; i++) {
        let curr = str.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }
 permute(stringArr)
 return result;
}
anagrams("abc")

module.exports = anagrams;
