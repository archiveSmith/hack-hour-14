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
if(!head){return null};
let array = [];
let current = head;
let prev;
while(current){
    prev = current
    if(array.includes(current.value)){
        prev.next = current.next;
    }else{
        array.push(current.value)
    }

    current = current.next;
}
}
function deleteDups(head) {


let current = head;
let prev;
while(current.next){
    prev = current
while(prev.next){
    if(current.value===prev.next.value){
        prev.next = prev.next.next
    }else{
        prev=prev.next
    }
}

    current = current.next;
}
}

module.exports = deleteDups;
