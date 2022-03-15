


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;

function sumIterative(head) {
  let current = head;
  let sum = 0;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}


function sumRecursive(head, sum = 0) {
  if (head === null) return sum;
  sum += head.val;
  return sumRecursive(head.next, sum);
}

function sumRecursive2(head) {
  if (head === null) return 0;
  return head.val + sumRecursive(head.next);
}

console.log(sumIterative(a));
console.log(sumRecursive(a));
console.log(sumRecursive(a));