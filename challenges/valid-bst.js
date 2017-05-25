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
  let isValid = false;

  if (tree.left === null && tree.right === null)
    return true;
  if (tree.left !== null)
    isValid = tree.left.value <= tree.value && validBST(tree.left);
  if (tree.right !== null  && isValid)
    isValid = tree.right.value > tree.value && validBST(tree.right);

  return isValid;
  // return tree.left.value <= tree.value && tree.right.value > tree.value && validBST(tree.left) && validBST(tree.right);
}

const root = new BinaryTree(10);
const left = new BinaryTree(5);
const left1 = new BinaryTree(1);
const left2 = new BinaryTree(7);
const right = new BinaryTree(15);
const right1 = new BinaryTree(11);
// const right2 = new BinaryTree(17);
const right2 = new BinaryTree(17);

root.left = left;
root.right = right;
left.left = left1;
left.right = left2;
right.left = right1;
right.right = right2;


console.log(root);
console.log(validBST(root));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };