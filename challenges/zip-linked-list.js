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
    let temp1;
    let temp2;
    for(let curr1 = l1, curr2 = l2; curr1 && curr2; curr1 = temp1, curr2 = temp2 ){
        temp1 = curr1.next;
        temp2 = curr2.next;
        if(curr1.next) curr2.next = curr1.next;
        curr1.next = curr2; 
    }
    return l1;
};

module.exports = {Node: Node, zip: zip};

// // TEST
// function print(l){
//     for(let curr = l; curr; curr=curr.next){
//         console.log(curr.value);
//     }
// }
// let node1_1 = new Node(1);
// let node1_2 = new Node(2);
// node1_1.next = node1_2;
// let node1_3 = new Node(3);
// node1_2.next = node1_3;
// let node1_4 = new Node(4);
// node1_3.next = node1_4;
// let node1_5 = new Node(5);
// node1_4.next = node1_5;
// let node1_6 = new Node(6);
// node1_5.next = node1_6;

// let node2_1 = new Node('a');
// let node2_2 = new Node('b');
// node2_1.next = node2_2;
// let node2_3 = new Node('c');
// node2_2.next = node2_3;
// let node2_4 = new Node('d');
// node2_3.next = node2_4;
// let node2_5 = new Node('e');
// node2_4.next = node2_5;

// console.log('l1: ');
// print(node1_1);
// console.log('l2: ');
// print(node2_1);
// console.log('zip: ');
// print(zip( node2_1, node1_1));
