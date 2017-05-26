/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */

function validBST(tree) {
    const status = true;
    

    function helper(tree) {
        if (!tree.left) {
            if (tree.left.value <= tree.value) {
                helper(tree.left);
            } else {
                status = false
            }
        }
        if (tree.right !== null) {
            if (tree.right.value > tree.value) {
                helper(tree.right);
            } else {
                status = false
            }
        }
    }
    helper(tree)

    return status
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };