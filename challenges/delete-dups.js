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

<<<<<<< HEAD
var Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
    //store each value in an array
    let obj = {}; 
    let curr = head;
    let prev;
    //if the current node has a value in the array point the previous node to curr.next
    while(curr){
        // console.log('while')
        if(!obj[curr.value]){
            obj[curr.value] = curr.value;
            // console.log('in if', curr.value)
        }
        else if (obj[curr.value]){
            prev.next = curr.next;
            
            console.log('in else', prev.next)
        }
        
        prev = curr;
        // console.log('prev', prev.next)
        curr = curr.next;
        // console.log('curr', curr)
    }
    return head; 

}

let node1 = new Node(3);
let node2 = new Node(3);
let node3 = new Node(3);
let node4 = new Node(3);
let node5 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(deleteDups(node1)); 
module.exports = deleteDups;
