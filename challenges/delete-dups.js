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
function Node (value) {
    this.value = value;
    this.next = null;
}

function deleteDups(head) {
    let curr = head;
    const values = [];

    //add to array
    while(curr) {
        if(values.indexOf(curr.value) < 0) {
            values.push(curr.value);
        }
        curr = curr.next;
    }
  
    //construct list
    let node = new Node(0);
    let newHead = node;
    for(let i = 0; i < values.length ; i++ ) {
        node.value = values[i];
        if(i !== values.length -1) {
          node.next = new Node(0);
          node = node.next;
        }
    }
    return newHead;
}
module.exports = deleteDups;

//test
// let test = new Node(1);
// test.next = new Node(2);
// test.next.next = new Node(2);
// test.next.next.next = new Node(3);

// deleteDups(test); //-> 1->2->3

