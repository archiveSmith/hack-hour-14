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

function stringRotation(s1, s2) {
  
  //find first 2 letters
  let f1 = s1.charAt(0) + s1.charAt(1);
  
  //check where letter appears in f2
  let f2 = s2.indexOf(f1);
  
  //split f2 into substrings at index and combine
  let string = s2.slice(f2, s2.length) + s2.slice(0,f2);

  if( string===s1) return true; 
  
  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
