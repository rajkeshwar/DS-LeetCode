
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
  const head = new ListNode(0);
  let result = head;

  let carry = 0;
  let sum = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {

    sum = 0;

    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }

    sum = sum + carry;
    carry = Math.floor(sum / 10);

    result.next = new ListNode(sum % 10)
    result = result.next;
  }

  return head.next;
};

const l1 = new ListNode(
  2, new ListNode(4, new ListNode(3))
)

const l2 = new ListNode(
  5, new ListNode(6, new ListNode(4))
)

const result = addTwoNumbers(l1, l2)

console.log(result);
