/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */

function validBST(tree) {
    const retArr = [];
    console.log(tree);

    function helper(tree) {
        retArr.push(tree.value);
        if (tree.left !== null) {
            if (tree.left.value <= tree.value) {
                helper(tree.left);
            } else {
                retArr.push(false)
            }
        }
        if (tree.right !== null) {
            if (tree.right.value > tree.value) {
                helper(tree.right);
            } else {
                retArr.push(false)
            }
        }

    }
    helper(tree)

    return retArr.includes(false) ? false : true
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };