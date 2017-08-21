/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {
  const perms = getPermutations(arr);
  perms.forEach(perm => callback(perm));
}

function getPermutations(arr) {
  if (arr.length < 2) return arr;
  const perms = [];

  for (let i = 0; i < arr.length; i += 1) {
    let curr = arr.slice(i, i + 1);
    let sliced = arr.slice(0, i).concat(arr.slice(i + 1));
    const currPerm = getPermutations(sliced);
    for (let j = 0; j < currPerm.length; j += 1) {
      perms.push(curr.concat(currPerm[j]));
    }
  }
  return perms;
}

//mark's solution:
// function getPermutationsOg(arr, callback) {
//   const result = [];
//   const len = array.length;
//
//   function perm(items, cur = []) {
//     if(curr.length === len) return result.push(cur);
//
//     let item;
//     for (let i = 0; i < items.length; i += 1) {
//       item = items.splice(i, 1)[0];
//       perm(items.slice(), cur.concat(item));
//       items.splice(i, 0, item);
//     }
//   };
// 
//   perm(arr);
//   result.forEach((e) => callback(e));
// }

//recursive solution:
// function eachPermutation(arr, callback, built = [], perms = {}) {
//   if (!arr.length && !(built in perms)) perms[built] = callback[built];
//   else arr.forEach((e, i) => eachPermutation([...arr.slice(0, i), arr.slice(i + 1)], callback, [...built, e], perms));
// }

console.log(eachPermutation([1,2,3], perm => console.log(perm)));


module.exports = eachPermutation;
