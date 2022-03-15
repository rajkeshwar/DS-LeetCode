


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


function nodeValueIterative(head, index) {
  let current = head;
  let counter = -1;

  while (current !== null) {
    if (++counter === index) return current.val;
    current = current.next;
  }

  return null;
}


function nodeValueRecursive(head, index, counter = 0) {
  if (head === null) return null;
  if (counter === index) return head.val;
  return nodeValueRecursive(head.next, index, counter += 1);
}

console.log(nodeValueIterative(a, 4));
console.log(nodeValueRecursive(a, 1));