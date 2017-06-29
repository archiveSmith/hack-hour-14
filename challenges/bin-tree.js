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
// function validBST(tree){
//     if(tree.value > valid)
// }


function validBST(tree) {
    console.log('tree: ',tree)
    function rec(tree, max, min){
        if(!tree) return true;
        if(tree.left && tree.left.value > max) return false;
        if(tree.right && min >= tree.right.value ) return false;
        if(tree.value > max) max = tree.value;
        if(tree.value < min) min = tree.value;
        return rec(tree.right, max, min) && rec(tree.left, max, min);
    }
    return rec(tree, tree.value, tree.value);
}

let tree = new BinaryTree(10);
tree.right = new BinaryTree(11);
tree.right.right = new BinaryTree(12);
tree.right.left = new BinaryTree(8);
console.log('full: ', tree.value);
console.log(validBST(tree));

// module.exports = {BinaryTree: BinaryTree, validBST: validBST};