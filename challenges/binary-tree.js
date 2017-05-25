/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */
 
function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

//traverse.
function traverse(tree, array) {
  
  if(tree.left === null && tree.right === null) {
  array.push(tree.value)
}
  if(tree.left) {
    traverse(tree.left, array)
    if(array.indexOf(tree.value) === -1) array.push(tree.value);
  }
  if(tree.right) {
    traverse(tree.right, array)
    if(array.indexOf(tree.value) === -1) array.push(tree.value);
  }
  return;
}

//then check.
function validBST(tree) {
    let top = [];
    traverse(tree, top)
    let actual = JSON.stringify(top);
    let expected = JSON.stringify(top.sort());
    if(actual === expected) return true;
    else{ return false};
}


// let l = new BinaryTree(50);
// l.left = new BinaryTree(25);
// l.right = new BinaryTree(60);
// l.right.left = new BinaryTree(55);
// l.right.right = new BinaryTree(80);

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
