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
  const uniqPerms = new Set()

  function getPermutations(possibilities, myPermutation, call = 1) {
    if (possibilities.length === 0) {
      return myPermutation
    } else {
      let permutationList = []

      for (let i = 0; i < possibilities.length; i++) {
        const pre = possibilities.substring(0, i)
        const post = possibilities.substring(i + 1)
        permutationList = permutationList.concat(getPermutations(pre + post, myPermutation + possibilities[i], call + 1))
      }
      return permutationList
    }
  }
  getPermutations(string, "").forEach(result => uniqPerms.add(result))
  return Array.from(uniqPerms)

  // var results = [];
  //
  // if (string.length === 1) {
  //   results.push(string);
  //   return results;
  // }
  //
  // for (var i = 0; i < string.length; i++) {
  //   var firstChar = string[i];
  //   var charsLeft = string.substring(0, i) + string.substring(i + 1);
  //   var innerPermutations = getAllPermutations(charsLeft);
  //   for (var j = 0; j < innerPermutations.length; j++) {
  //     results.push(firstChar + innerPermutations[j]);
  //   }
  // }
  // return [...new Set(results)];

}

module.exports = anagrams;
