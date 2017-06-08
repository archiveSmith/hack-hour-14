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

function superbalanced(tree) {
  // if empty return true
  if (tree.right === null && tree.left === null) return true;
  // track height of left and right sub trees for each tree
  let leftHeight = height(tree.left);
  let rightHeight = height(tree.right);
  // if height difference of left and right trees are > 1 return false
  if (Math.abs(leftHeight - rightHeight) > 1) return false;
  else { return true; }
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};

function height(node){
  if (!node) return 0;
  let leftHeight = height(node.left);
  let rightHeight = height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

// let twee = new BinaryTree(5);
// twee.left =
