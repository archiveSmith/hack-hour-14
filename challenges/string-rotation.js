/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}
//if s1 === s2 return true
//combine s1
//insert str and s2 into isSubstring to check if there is an index
//if is substring is greater than -1 return true else false


function stringRotation(s1, s2) {
 
 if(s1.length !== s2.length || s1 !== s2) return false; 

 return isSubstring((s1+s1), s2);

}

console.log(stringRotation("hello", "hello")) //-> true
              console.log(stringRotation("hello", "llohe")) //-> true

              console.log(stringRotation("hello", "he")) //-> false
              console.log(stringRotation("hello", "ollhe")) //-> false (not a rotation, just an anagram)

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};



// function stringRotation(s1, s2) {
//     if(s1.length !== s2.length) return false; 
    
//     let superS1 = s1+ s1; 
  
//     return isSubstring(superS1,s2); 
// }
