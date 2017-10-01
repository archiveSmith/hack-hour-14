/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

class BinaryTree {
 constructor(value) {
   this.value = value;
   this.left = null;
   this.right = null;
 }
}

const superbalanced = (tree) => {
  const checkBalance = (tree) => {
    if (!tree) return 0;
    const left = checkBalance(tree.left);
    if (left === 'unbalanced') return false;
    const right = checkBalance(tree.right);
    if (right === 'unbalanced') return false;
    if (left - right > 1 || right - left > 1) return 'unbalanced';
    else return 1 + Math.max(left, right);
  }
  return checkBalance(tree) ? true : false;
}



// function BinaryTree(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

// const getHeight = (tree) => {
//   if (!tree) return -1;
//   let left = getHeight(tree.left);
//   let right = getHeight(tree.right);
//   return Math.max(left, right) + 1;
// }

// function superbalanced(tree) {
//   const leftHeight = getHeight(tree.left);
//   const rightHeight = getHeight(tree.right);
//   if (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) return false;
//   else return true;
// }

const balancedTree = {value: 5, left: {value: 3, left: {value: 2, left: null, right: null}, right: null}, right: {value: 7, left: null, right: null}};
const unbalancedTree = {value: 5, left: {value: 3, left: {value: 2, left: { value: 1, left: null, right: null}, right: null}, right: null}, right: {value: 7, left: null, right: null}};
// console.log(JSON.stringify(balancedTree, null, 2));
console.log(JSON.stringify(unbalancedTree, null, 2));
console.log(superbalanced(balancedTree));
console.log(superbalanced(unbalancedTree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
