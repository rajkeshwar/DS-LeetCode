

/**
 * Reverse a linked list
 */
 class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

function reverseIterative(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function reverseRecursive(head, prev = null) {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseRecursive(next, head);
}

// N <- A <- B <- C <- D


// const ret = reverseIterative(a);
const ret2 = reverseRecursive(a);

function print(head) {
  let current = head;
  const results = []

  while (current !== null) {
    results.push(current.val);
    current = current.next;
  }

  return results;
}

console.log(print(ret2));
// console.log(ret2);