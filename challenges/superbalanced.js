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

function getHeight (tree, height = 0) {
  let lh = 0;
  let rh = 0;
  
  //traverse to lowest node 
  if(!tree.left && !tree.right) {
    return height;
  }
  
  if(tree.left) {
    lh = getHeight(tree.left, ++height);
  }
  
  if(tree.right) {
    rh = getHeight(tree.right, ++height)
  }
  
  return Math.max(lh, rh);
}


function superbalanced(tree) {

  //IF EMPTY
  if(!tree.left && !tree.right) return true;
  
  else{
    let lh = getHeight(tree.left)
    let rh = getHeight(tree.right)
    
    if(Math.abs((rh-lh)) <= 1) {
      return true
    } else {
      return false;
    }
  }
}

// let t = new BinaryTree(5);
// t.right = new BinaryTree(6);
// t.right.right = new BinaryTree(8);
// t.left = new BinaryTree(3);
// t.left.right = new BinaryTree(4);
// t.left.left = new BinaryTree(2);
// t.left.left.left = new BinaryTree(1);
// t.left.left.left.left = new BinaryTree(0);
// console.log(superbalanced(t))
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
