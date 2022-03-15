
/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 */
var hasCycle = function (head) {
  if (head === null) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next !== null) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};