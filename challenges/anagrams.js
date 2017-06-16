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
  // find all permutations of an array and return it
  // split string
  let arr = string.split('')
  const permutations = []
  // break condition
  if (arr.length === 0) return [string];
  // loop through the array of characters
  for (let i = 0; i < arr.length; i += 1) {
    // make a copy of the orig array
    let rest = arr.slice();
    // splice the array copy
    let picked = rest.splice(i, 1);
    // recursively call anagrams
    let restPerms = anagrams(rest.join(''));
    console.log(restPerms);
    for (let j = 0; j < restPerms.length; j++) {
      let next = picked.concat(restPerms[j]);
      permutations.push(next.join(''));
    }
  }
  return permutations;
}

console.log(anagrams('abc'));

module.exports = anagrams;
