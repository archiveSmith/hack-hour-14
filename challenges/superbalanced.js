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

  function findDepth(node, depth = 0) {
    if (!node) return depth;
    const left = findDepth(node.left, ++depth);
    const right = findDepth(node.right, depth);
    if (left < right) return right;
    else if (right <= left) return left;
  }
  if (!tree) return true;
  const right = findDepth(tree.right);
  const left = findDepth(tree.left);

  if (Math.abs(right - left) <= 1) return true;
  else return false;
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
