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

  // const arr = [];
  // let current = head;
  // while (current) {
  //   arr.push(current.value);
  //   current = current.next;
  // }
  // const filtered = arr.filter((item, index, array) => {
  //   return array.indexOf(item) === index;
  // })
  // let newList = null;
  // for (let i = filtered.length - 1; i >= 0; i -= 1) {
  //   newList = {
  //     value: filtered[i],
  //     next: newList
  //   }
  // }
  // return newList;

  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.value);
    if (current.next && arr.includes(current.next.value)) {
      let temp = current.next.next;
      current.next = temp;
    }
    current = current.next;
  }

  return head;
}

const ll = { value: 1, next: { value: 1, next: { value: 3, next: { value: 3, next: null}}}};

console.log(deleteDups(ll))

module.exports = deleteDups;
