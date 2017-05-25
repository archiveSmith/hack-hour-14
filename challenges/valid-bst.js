/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */

class BinaryTree {
  constructor (val) {
    this.value = val
    this.left = null
    this.right = null
  }
  depthFirstIn (cb) {
    if (this.left !== null) this.left.depthFirstIn(cb)
    cb(this.value)
    if (this.right !== null) this.right.depthFirstIn(cb)
  }
}

const validBST = (tree) => {
  const store = []
  tree.depthFirstIn(val => store.push(val))
  const test = store.slice().sort()
  return JSON.stringify(store) === JSON.stringify(test)
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST}
