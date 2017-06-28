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
  let heightLeft;
  let heightRight;
  if(!tree) return 0;
  heightLeft += superbalanced(tree.height);

  if(Math.abs(superbalanced(tree.left)-superbalanced(tree.right))){

  }
}
console.log(0 - null);
let tree = new BinaryTree(0);
tree.left = new BinaryTree(1);
tree.right = new BinaryTree(2);
tree.left.left = new BinaryTree(3);
tree.left.right = new BinaryTree(8);
// module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
