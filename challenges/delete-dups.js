/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
  let prev;
  for(let i = head; i != null; i = i.next){
    for(let j = i.next; j != null ; j = j.next){
      
      if(j.value == i.value){
        prev.next = j.next
      }
      prev = j;
    }
  }
  return head;
}

module.exports = deleteDups;
