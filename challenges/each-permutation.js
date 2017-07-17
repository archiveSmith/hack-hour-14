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

//more efficient
function eachPermutation(arr, callback) {
  
  // these arrays will be the only ones we create. they will get mutated  
  var path = []; 
  var indexesUsed = [];

  permUtil(0);
  function permUtil(pathIndex) {

    // base case. done building up path
    if (pathIndex === arr.length) { 
      return callback(path);
    }

    for (var i = 0; i < arr.length; i++) {
        
      // only if this element hasn't been used yet
      if (!indexesUsed[i]) {  
        indexesUsed[i] = true;
        path[pathIndex] = arr[i];
        permUtil(pathIndex + 1);
        indexesUsed[i] = false;
      }
    }
  }

}


// inefficient because it must make two new arrays for each function call
function eachPermutation(arr, callback) {

  var indexesUsed = []; 

   // can't repeat elements, so keep track of the indexes of the elements we've already used

  for (var i = 0; i < arr.length; i++) {
    indexesUsed.push(false);
  }

  permUtil([], indexesUsed);
  function permUtil(path, indexesUsed) {

    // base case. done building up path
    if (path.length === arr.length) { 
      return callback(path);
    }

    for (var i = 0; i < arr.length; i++) {
      if (indexesUsed[i] === false) {
        var indexesUsedClone = indexesUsed.slice();
        indexesUsedClone[i] = true;
    // the concat method creates a new array, rather than pushing to the existing array
        permUtil(path.concat(arr[i]), indexesUsedClone); 
    
      }
    }
  }

}



module.exports = eachPermutation;
