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

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
    let obj = {}
    for(let curr = head; curr; curr = curr.next){
        if(curr.next && curr.next.value in obj)
            curr.next = curr.next.next;
        if(!(curr.value in obj))
            obj[curr.value] = true;
    }
    return head;
}

function print(l){
    for(let curr = l; curr; curr=curr.next){
        console.log(curr.value);
    }
}

var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('1');
var node5 = node4.next = new Node('5');
deleteDups(node1);
print(node1);

module.exports = deleteDups;
