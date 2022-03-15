
/**
 * 19. Remove Nth Node From End of List
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let left = dummy;
  let right = head;

  while (n > 0 && right !== null) {
    right = right.next;
    n -= 1;
  }

  while (right !== null) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return dummy.next;
};