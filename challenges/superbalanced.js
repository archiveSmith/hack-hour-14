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

function minDepth(node){
  if(!node)return 0;
  return 1 + Math.min(minDepth(node.right), minDepth(node.left));
}

function maxDepth(node){
  if(!node)return 0;
  return 1 + Math.max(maxDepth(node.right), maxDepth(node.left))
}

function superbalanced(tree) {
  let height1 = minDepth(tree);
  let height2 = maxDepth(tree);
  if(!tree){return true;}
  return height2-height1<=1
}

let Tree = new BinaryTree(8)
Tree.left = new BinaryTree(7)
Tree.left.left = new BinaryTree(6)
Tree.right = new BinaryTree(9)

console.log(maxDepth(Tree))



module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
