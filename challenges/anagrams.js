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

// function anagrams(string) {
//   if (string.length < 2) return string;
//   const permutations = [];
//
//   for (let i = 0; i < string.length; i += 1) {
//     let char = string[i];
//     let sliced = string.slice(0, i) + string.slice(i + 1, string.length);
//     const arr = anagrams(sliced);
//     for (let j = 0; j < arr.length; j += 1) {
//       permutations.push(char + arr[j]);
//     }
//   }
//   return permutations;
// }

const anagrams = (string) => {
  if (typeof string !== 'string') return 'invalid input';
  const permutations = {};
  const getPerms = (str, cur = '') => {
    if (str === '') return permutations[cur] = true;
    for (let i = 0; i < str.length; i += 1) {
      const selected = str.charAt(i);
      const rest = str.slice(0, i) + str.slice(i + 1);
      console.log('selected', selected);
      console.log('rest', rest)
      console.log('*******')
      getPerms(rest, cur + selected);
      // console.log(JSON.stringify(permutations));
    }
    return null;
  }
  getPerms(string);
  return Object.keys(permutations);
}

console.log(anagrams('abc')); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

module.exports = anagrams;
