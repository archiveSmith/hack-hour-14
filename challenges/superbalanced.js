/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example:  
 */

class BinaryTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const superbalanced = (tree) => {
  if (tree.left === null && tree.right === null) return true
  const diff = Math.abs(findHeight(tree.left) - findHeight(tree.right))
  return diff <= 1
}

const findHeight = (tree) => {
    if (tree === null) return 0
    let leftH = findHeight(tree.left)
    let rightH = findHeight(tree.right)
    return (leftH > rightH) ? leftH + 1 : rightH + 1
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
