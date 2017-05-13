/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let curr = head;
    let reversedNext = null;

    while(curr) {
        
        //save pointer to original next node
        let originalNext = curr.next;
        
        //update next
        curr.next = reversedNext;
        //save our current position as the new next pointer
        reversedNext = curr;
        
        //if reached the tail of original list, break
        if(originalNext === null) break;
        
        //traverse to original next node
        curr = originalNext;
    }
    return curr;

}
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};


/*
console.log("\n currently at: ", curr);
 console.log("\n saving next value ...", oldNext)
 console.log("\n updating next pointer to newNext ", newNext);
 console.log("\n saving current position as newNext", newNext);
 console.log("\n moving to original next pointer position...now at", curr)


let test = new Node('a');
test.next = new Node('b');
test.next.next = new Node('c');

console.log("REVERSED:", reverseLinkedList(test))
*/
