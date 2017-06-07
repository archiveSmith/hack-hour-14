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
  if(s1.length !== s2.length) return false;
  let subStr1 = '';
  let subStr2 = '';

  for(let index = 0; index < s2.length; index++){
    if(s1.charAt(0) === s2.charAt(index)){
      subStr1 = s2.slice(0,index);
      subStr2 = s2.slice(index);
      break;
    }
  }

  if(subStr2 === s1.slice(0,subStr2.length) &&
        subStr1 === s1.slice(subStr2.length)){
    return true;
  }
  return false;
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
