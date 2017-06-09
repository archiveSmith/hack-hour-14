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

function balanced(tree, count = 0) {
  if (!tree) {
    return count;
  }

  count++;

  let left = balanced(tree.left, count);
  let right = balanced(tree.right, count);

  return Math.max(left, right);
}

function superbalanced(tree) {
  if (!tree) {
    return true;
  }
  
  let left = 0;
  let right = 0;
  
  if (tree.left) {
    left = balanced(tree.left);
  }
  
  if (tree.right) {
    right = balanced(tree.right);
  } 
  
  return Math.abs(left - right) <= 1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
