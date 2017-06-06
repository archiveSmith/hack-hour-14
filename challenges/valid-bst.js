/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  function makeArray(node) {
    if (!node) return [];
    return [...makeArray(node.left), node.value, ...makeArray(node.right)]
  }
  const entireArray = makeArray(tree);
  for (let i = 1; i < entireArray.length; i++) {
    if (entireArray[i] < entireArray[i - 1]) return false;
  }
  return true;
}


// MIN/MAX WAY
// function validBST(BST) {
//   if (BST instanceof BinaryTree === false) return 'bad input';


//   function isValid(tree, min, max) {
//     if (!tree) return true;
//     if (tree.value > min &&
//       tree.value < max &&
//       isValid(tree.left, min, tree.value) &&
//       isValid(tree.right, tree.value, max)) {
//       return true;
//     }
//     return false;
//   }
//   return isValid(BST, -Infinity, Infinity)
// }


// function validBST(tree) {
//   return BSTleft(tree.value) && BSTright(tree.value);
// }

// function BSTleft(node) {
//   while(node.left.value <= node.value || node.left.value === null) {
//     let currNode = node.left.value
//     BSTright(node.value)
//     if (currNode === null) return true;
//   }
// }

// function BSTright(node) {
//   while(node.right.value > node.value || node.right.value === null) {
//     let currNode = node.right.value
//     BSTleft(node.value)
//     if (node.right.value === null) return true;
//   }
// }


