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

function getHeight(tree, height = 0) {
  if (!tree) {
    return height;
  }
  let lh = getHeight(tree.left, height + 1);
  let rh = getHeight(tree.right, height + 1);
  
  return Math.max(lh, rh);
}


function superbalanced(tree) {
  //Base case
  if (!tree) return true;
  //Check if Tree left balanced
  let leftBalanced = superbalanced(tree.left)
  //check if Tree right balanced
  let rightBalanced = superbalanced(tree.right)
  //check if height difference is less than 2
  let rh = getHeight(tree.right)
  let lh = getHeight(tree.left)
  let treeHeightDiffOK = Math.abs(rh - lh) <= 1;

  return leftBalanced && rightBalanced && treeHeightDiffOK;
}
module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };

/* //test
  let balanced = new BinaryTree(5);
  balanced.right = new BinaryTree(6);
  balanced.right.right = new BinaryTree(8);
  balanced.left = new BinaryTree(3);
  balanced.left.right = new BinaryTree(4);
  balanced.left.left = new BinaryTree(2);
  balanced.left.left.left = new BinaryTree(1);

  let unbalanced = new BinaryTree(5);
  unbalanced.right = new BinaryTree(6);
  unbalanced.right.right = new BinaryTree(8);
  unbalanced.left = new BinaryTree(3);
  unbalanced.left.right = new BinaryTree(4);
  unbalanced.left.left = new BinaryTree(2);
  unbalanced.left.left.left.left = new BinaryTree(0);
  unbalanced.left.left.left = new BinaryTree(1);


  console.log(superbalanced(balanced))
*/
