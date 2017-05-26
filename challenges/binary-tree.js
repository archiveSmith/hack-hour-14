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
    if(tree === null) {
        return true
    } else if(tree.left !== null && tree.right !== null){
        if(!tree.left || tree.left.value < tree.value ){
            if(tree.right.value >= tree.value || !tree.right){
                return validBST(tree.left) && validBST(tree.right)
            }
            return false
        }
        return false;
    }
    return true;
}


// let treeA = new BinaryTree(5)
// treeA.left = new BinaryTree(3)
// treeA.right = new BinaryTree(9)
// treeA.right.right = new BinaryTree(11)
// treeA.left.left = new BinaryTree(1)
// treeA.left.right = new BinaryTree(4)

console.log(validBST(treeA))

module.exports = {BinaryTree: BinaryTree, validBST: validBST};