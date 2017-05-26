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

 function validBST(tree) {
   const arr = [];
   function depthFirstIn(tree) {
     if (tree.left) depthFirstIn(tree.left);
     arr.push(tree.value)
     if (tree.right) depthFirstIn(tree.right);
   }
   depthFirstIn(tree);
   for (let i = 0; i < arr.length; i += 1) {
     if (arr[i] > arr[i + 1]) return false;
   }
   return true;
 }

 let tree = new BinaryTree(5);
 tree.left = new BinaryTree(2);
 tree.right = new BinaryTree(7);
 tree.left.right = new BinaryTree(3);

 console.log(validBST(tree));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
