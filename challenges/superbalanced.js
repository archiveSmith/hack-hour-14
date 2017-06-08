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
  // base case
  if (!tree) return true;

  return Math.abs(findMaxDepth(tree.left) - findMaxDepth(tree.right)) <= 1;
}

function findMaxDepth(tree){
  // base case
  if (!tree) return 0;

  return Math.max(
    findMaxDepth(tree.left),
    findMaxDepth(tree.right)
  ) + 1;

}

balancedBST = new BinaryTree (5);
balancedBST.left = new BinaryTree (3);
balancedBST.right = new BinaryTree (15);
balancedBST.right.right = new BinaryTree (16);

// console.log(findMaxDepth(balancedBST));

unbalancedBST = new BinaryTree (5);
unbalancedBST.left = new BinaryTree (3);
unbalancedBST.right = new BinaryTree (15);
unbalancedBST.right.right = new BinaryTree (16);
unbalancedBST.right.right.right = new BinaryTree (17);

// console.log(findMaxDepth(unbalancedBST));

console.log(superbalanced(unbalancedBST));


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
