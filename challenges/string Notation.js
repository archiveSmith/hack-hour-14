
/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o  ===  l->l-o->h->e
 * h->e->l->l->o  !==  o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *       stringRotation("hello", "llohe") -> true
 *       stringRotation("hello", "he") -> false
 *       stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */
​
function isSubstring(s1, s2) {
return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
    let newS2 = rotation(s1, s2);
    if (isSubstring(s1, newS2)){
      for (let i = 0; i < s1.length; i++){
        if (s1[i] !== newS2[i]){
          return false;
        }
      }
       return true;
    } 
    return false;
}

function rotation (s1, s2){
  let str = s2;
  let starterIndx = s2.indexOf(s1[0]);
  s2 = s2.slice(starterIndx).concat(s2.slice(0, starterIndx));
  console.log(s2);
  return s2;
}
​
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};