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

// function zip(l1, l2) {
//   let a = l1;
//   let b = l2;
//   if (l1.next === null) {
//     l1.next = l2;
//     return l1;
//   }
//   else {
//     while (a.next !== null) {
//       let temp = a.next;
//       a.next = b;
//       a = a.next.next;
//       b = temp;
//     }
//   }
//   // let temp = l1.next;
//   // l1.next = l2;
//   // temp2 = l2.next;
//   // l2.next = temp;
//   // temp.next = temp2;
//   return JSON.stringify(a);
// };

function zip(l1, l2) {

}

list1 = { value: 1, next: { value: 3, next: null } };
list2 = { value: 2, next: { value: 4, next: null } };

console.log(zip(list1, list2));

module.exports = {Node: Node, zip: zip};
