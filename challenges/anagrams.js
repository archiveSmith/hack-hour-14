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


//decide to take or not to take
function anagrams(string) {
  //base case 1 permutation
  if(string.length < 2) {
    return string;
  }

  const result = [];
  
    //for each character
    for(let i=0; i<string.length; i++) {
          let char = string[i];
          
          //prevent duplicates
          if(string.indexOf(char) != i) {
            continue;
          }
      
          //get substring without selected character
          let remainingStr = string.slice(0, i) + string.slice(i+1, string.length);
          console.log("reamining string", remainingStr)
          
          for(let subPerm of anagrams(remainingStr)) 
            result.push(char + subPerm)
          
    }  
  return result;
}


// function anagrams(string) {
//   const anagrams = [];
//   for(let i=0; i< string.length; i++) {
//     let current = string[i];
//     let anagram = "" + string[i];
//     for(j = 0; j < string.length; j++) {
//       if(i !== j){
//         anagram += string[j];
//       }
//     }
//     anagrams.push(anagram);
//   }
// }

module.exports = anagrams;
