function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

 */

 /* approach:
    1. Understand the problem and create test cases!
    2. Create a function, treeHeight, to find the height of a binary tree

    3. Create main function, superbalanced. check for base case: tree is null
    4. find height of left branch and height of right branch
    5. check that the branch heights differ by no more than 1
    6. check that the right tree and left tree are balanced
 */

 // Create Balanced Tree
 const balancedTree = new BinaryTree(0);
 balancedTree.left = new BinaryTree(-2);
 balancedTree.right = new BinaryTree(2);

 balancedTree.left.left = new BinaryTree(-3);
 balancedTree.left.right = new BinaryTree(-1);

 balancedTree.right.left = new BinaryTree(1);
 balancedTree.right.right = new BinaryTree(3);

 balancedTree.left.left.left = new BinaryTree(-4);

 /*
 Balanced:
 .................0................
 .............../...\..............
 ............../.....\.............
 ............-2.......2............
 .........../...\.../...\..........
 .........-3....-1.1.....3.........

Unbalanced:
 .................0................
 .............../...\..............
 .............-1.....1.............
 ............/.........\...........
 ..........-2...........2..........
 ........../.............\.........
 ........-3...............3........

 */


 // Create Unbalanced Tree
 const unbalancedTree = new BinaryTree(0);
 unbalancedTree.left = new BinaryTree(-1);
 unbalancedTree.right = new BinaryTree(1);

 unbalancedTree.left.left = new BinaryTree(-2);
 unbalancedTree.right.right = new BinaryTree(2);

 unbalancedTree.left.left.left = new BinaryTree(-3);
 unbalancedTree.right.right.right = new BinaryTree(3);


function treeHeight(tree, height = 0) {
  // Base Case: tree is null
  if (!tree) return height;
  // Check height of left. Store height in variable
  let leftHeight = treeHeight(tree.left, height + 1);
  // Check height of right. Store height in variable
  let rightHeight = treeHeight(tree.right, height + 1);
  // return maximum of right and left height
  return Math.max(leftHeight, rightHeight);
}

function superbalanced(tree) {
  // Base case: if tree is null, return true!
  if (!tree) return true;
  // Check that the left is balanced with a recursive call. Store as boolean
  let leftBalanced = superbalanced(tree.left);
  // Check that the right is balanced with a recursive call. Store as boolean
  let rightBalanced = superbalanced(tree.right);
  // Check that the height diff between left and right is no more than 1. Store as boolean
  let heightDiffOK = Math.abs(treeHeight(tree.left) - treeHeight(tree.right)) <= 1;
  // Return value: left is balanced AND right is balanced AND hieght diff is ok
  return leftBalanced && rightBalanced && heightDiffOK;
}


// Test
console.log('root is superbalanced:', superbalanced(balancedTree));

function treeHeight(tree, height = 0) {
  return tree ? Math.max(howHigh(tree.left, height + 1), howHigh(tree.right, height + 1)) : height;
}

function superbalanced(tree) {
  return !tree || (Math.abs(howHigh(tree.left) - howHigh(tree.right)) <= 1 && superbalanced(tree.left) && superbalanced(tree.right));
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};