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

//codesmith way
function zip(l1, l2) {
  // Setting pointer variables.
  let curr1 = temp1 = l1;
  let curr2 = temp2 = l2;

  // Zip until we reach the end of one/both of the lists.
  while (curr1 && curr2) {

    // Moving temp pointers.
    if (temp1) temp1 = temp1.next;
    if (temp2) temp2 = temp2.next;

    // Zipping / alternating.
    curr1.next = curr2;
    if (temp1) curr2.next = temp1;

    // Moving curr pointers.
    [curr1, curr2] = [temp1, temp2];

  }

  // Return first list if it exists, second if first is null.
  // Will return null (via l2) if both are null.
  return l1 ? l1 : l2;
}




//my way
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



