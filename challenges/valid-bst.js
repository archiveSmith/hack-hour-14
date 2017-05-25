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
    if (tree.left === null && tree.right === null) { return true }
    if (tree.left === null && tree.value < tree.right.value) { return validBST(tree.right) }
    if (tree.right === null && tree.value > tree.left.value) { return validBST(tree.left) }
    if (tree.value < tree.right.value && tree.value > tree.left.value) { return validBST(tree.left) && validBST(tree.right) }
    return false;
}

let node1 = new BinaryTree(1);
let node2 = new BinaryTree(2);
let node3 = new BinaryTree(3);
let node4 = new BinaryTree(4);
let node5 = new BinaryTree(5);
let node6 = new BinaryTree(6);
let node7 = new BinaryTree(7);
let node8 = new BinaryTree(8);
let node9 = new BinaryTree(9);

node2.right = node1;
node3.left = node2;
node5.left = node3;
node3.right = node4;
node7.left = node6;
node8.left = node7;
node5.right = node8;
node8.right = node9;

console.log(validBST(node5))// returns false
node2.left = node1;
node2.right = null;
console.log(validBST(node5))// returns true


module.exports = { BinaryTree: BinaryTree, validBST: validBST };