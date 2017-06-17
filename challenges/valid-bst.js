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
  if (tree.left === null && tree.right === null) return true;
  if (tree.value > tree.left.value && tree.right.value === null) return validBST(tree.left);
  if (tree.value <= tree.right.value && tree.left.value === null) return validBST(tree.right);
  if (tree.value > tree.left.value && tree.value <= tree.right.value)
    return validBST(tree.left) && validBST(tree.right);
  return false;
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };

// const twee = new BinaryTree(4);
// twee.left = new BinaryTree(2);
// twee.left.left = new BinaryTree(1);
// twee.left.right = new BinaryTree(3);
// twee.right = new BinaryTree(6);
// twee.right.left = new BinaryTree(9);
// twee.right.right = new BinaryTree(7);
//
// console.log(twee);
// console.log (validBST(twee));
