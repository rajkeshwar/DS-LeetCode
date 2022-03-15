
/**
 * 143. Reorder List
 * @param {*} head 
 */

var reorderList = function (head) {
  // find middle
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let second = slow.next;
  let prev = slow.next = null;

  while (second !== null) {
    const next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }

  let first = head;
  second = prev;

  while (second !== null) {
    let tmp1 = first.next;
    let tmp2 = second.next;

    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
};