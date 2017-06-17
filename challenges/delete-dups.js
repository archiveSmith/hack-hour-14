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
    let curr = head;
    let check, prevCheck;
    while (curr.next) {
        check = curr;
        while (check.next) {
            if (curr.value === check.value) {
                prevCheck.next = check.next;
            }
            prevCheck = check;
            check = check.next;
        }
        curr = curr.next;
    }
    return head;
}
deleteDups({
    value: 1,
    next: { value: 2, next: { value: 3, next: { value: 3, next: null } } }
})

module.exports = deleteDups;
