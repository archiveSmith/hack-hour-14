/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null
}

// function zip(l1, l2) {
//   let len = Math.max([l1.length, l2.length])
//   for (let i = 0; i < len; i++) {
//     if (l1[0].value.length > 0 )
//   }
// }


// function zip(l1, l2) {
//   let len = Math.min([l1.length, l2.length]);
//   for (let i = 0; i < len; i++) {
//     if (l1[i].value.length > 0 && l2[i].value.length > 0) {
//       l1[i].next = l2[i]
//     }
//   }
// }


function zip(l1, l2) {
  
  let head = l1;
  let temp = l1;
  l1 = l1.next;
  
  while (l1 && l2) {
    temp.next = l2; //l1.next = l2
    l2 = l2.next; 
    temp = temp.next; //l1 = l1.next
    
    temp.next = l1; //l1.next = l1
    l1 = l1.next; //l1.next = l1.l1.next
    temp = temp.next; //l1.next
    
  }
  
  temp.next = l2 ? l2 : l1;
  return head;
}

