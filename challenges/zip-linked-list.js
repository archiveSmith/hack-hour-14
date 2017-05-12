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
    let storage = l2.next;
    let current1 = l1;
    let current2 =l2;
    while (current1 && current2){
      if(current1.next){
        current2.next= current1.next;}
        current1.next= current2;
        current1=current2.next;
        current2=storage;
        if(current2)
        storage=current2.next;
        if(current1 == current2){break}
      }
};

// zip({value:1,next:{value:3,next:{value:5,next:null}}},{value:2,next:{value:4,next:{value:6,next:{value:8,next:{value:10,next:null}}}}})
// zip({value:1,next:{value:3,next:{value:5,next:{value:7,next:{value:9,next:null}}}}},{value:2,next:{value:4,next:{value:6,next:null}}})


module.exports = {Node: Node, zip: zip};