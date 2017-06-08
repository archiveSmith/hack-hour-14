/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const getHeight = (tree) => {
    if (!tree) return -1;
    let left = getHeight(tree.left);
    let right = getHeight(tree.right);
    return Math.max(left, right) + 1;
  }

function superbalanced(tree) {
  const leftHeight = getHeight(tree.left);
  const rightHeight = getHeight(tree.right);
  // console.log(leftHeight, rightHeight);
  if (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) return false;
  else return true;
}

const tree = {value: 1, left: {value: 2, left: {value: 3, left: null, right: null}, right: null}, right: {value: 5, left: null, right: null}};
console.log(superbalanced(tree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
