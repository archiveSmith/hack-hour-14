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
  // let valid;
  // let temp = tree.left
  // while(tree.value >= temp.value){
  //   if(temp.left !== null){
  //     temp = temp.left;
  //   }else{
  //     return false;
  //   }
  //
  // }

  let valid;

  if(tree.left !== null && tree.value >= tree.left.value ){
    if(tree.left.left === null){
      valid = true;
    }else{
      return validBST(tree.left);
    }
  }else{
    return false;
  }


  if(tree.left !== null && tree.value < tree.right.value ){
    if(tree.right.right === null){
      valid = true;
    }else{
      return validBST(tree.right);
    }
  }else{
    return false;
  }

  return valid;

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
