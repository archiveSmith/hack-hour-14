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

const zip = (l1, l2) => {
  let temp1;
  let temp2;
  let current = l1;

  while(l1 && l2) {
    if (!current.next) {
      current.next = l2;
      break
    }
    else {
      temp1 = current.next;
      current.next = l2;
      temp2 = l2.next;
      l2.next = temp1;

      current = temp1;
      l2 = temp2;
    }
  }
  return l1;
}

// const zip = (l1, l2) => {
//   if (!l1) return l2;
//   l1.next = zip(l2, l1.next);
//   return l1;
// }

list1 = { value: 1, next: null };
list2 = { value: 2, next: { value: 4, next: null } };

console.log(JSON.stringify(zip(list1, list2)));

























// function zip(l1, l2) {
//   if (!l1) return l2;
//   l1.next = zip(l2, l1.next);
//   return l1;
// }
// function zip(l1,l2) {
//   let curr1 = l1;
//   let temp1 = l1;
//
//   let curr2 = l2;
//   let temp2 = l2;
//
//   while (curr1 && curr2) {
//     temp1 = temp1.next;
//     temp2 = temp2.next;
//
//     curr1.next = curr2;
//     if (temp1) curr2.next = temp1;
//
//     curr1 = temp1;
//     curr2 = temp2;
//   }
//   return l1 ? l1 : l2;
// }

// function zip(l1, l2) {
//   let curr1 = l1;
//   let temp1 = l1;
//
//   let curr2 = l2;
//   let temp2 = l2;
//
//   //more elegant:
//   // let curr1 = temp1 = l1;
//   // let curr2 = temp2 = l2;
//
//   while (curr1 && curr2) {
//
//     //temp variables hold on to each list's next node
//     if (temp1) temp1 = temp1.next;
//     if (temp2) temp2 = temp2.next;
//
//     //do reassigning here
//     curr1.next = curr2;
//     if (temp1) curr2.next = temp1;
//
//     //have curr1 and curr2 point to next nodes so we can keep moving down the list
//     curr1 = temp1;
//     curr2 = temp2;
//   }
//
//   //if l1 isn't null, return l1
//   return l1 ? l1 : l2;
// }

module.exports = {Node: Node, zip: zip};
