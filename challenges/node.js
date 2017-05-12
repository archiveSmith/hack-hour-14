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
  let lzip = new Node(5);
console.log(lzip)
//   let lzip = {value: null, next: null};
//   if (l1.value !== null) {
//     lzip.value = l1.value;
//     l1 = l1.next;
//   } else {
//     lzip.value = l2.value;
//     l2 = l2.next;
//   }

  
//   while (!(l1.next === null && l2.next === null))
//     // console.log(l1.next)
//     if (l1.next === null) {
//       lzip.next = {value: l2.value, next: null}
//       lzip = lzip.next;
//       l1 = l1.next;
//     } else if (l2.next === null) {
//       lzip.next = {value: l1.value, next: null}
//       lzip = lzip.next;
//       l2 = l2.next;
//     } else {
//       // console.log(l1)
//       lzip.next = {value: l1.value, next: null}
//       lzip = lzip.next;
//       l1 = l1.next;
//       console.log(l1.next)
//       lzip.next = {value: l2.value, next: null}
//       lzip = lzip.next;
//       l2 = l2.next
//     }

//   return lzip
};

test1 = {value: 1, next:{value:3, next: {value:5, next: null}}}
test2 = {value: 2, next:{value:4, next: {value:6, next: null}}}

zip(test1,test2)

module.exports = { Node: Node, zip: zip };