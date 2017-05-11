/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1 && !l2) {
    return null;
  }

  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let head = l1;
  let tail = l1;
  
  let l1Head = l1.next;
  let l2Head = l2;
  let first = false;
  
  while (l1Head && l2Head) {
    if (first) {
      tail.next = l1Head;
      tail = tail.next;
      l1Head = l1Head.next;
      first = false;
    }
    else {
      tail.next = l2Head;
      tail = tail.next;
      l2Head = l2Head.next;
      first = true;
    }
  }
  
  if (l1Head) {
    tail.next = l1Head;
  }
  else if (l2Head) {
    tail.next = l2Head;
  }
  
  return head;
}

module.exports = {Node: Node, zip: zip};