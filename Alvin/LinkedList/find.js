


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


function findRecursive(head, target) {
  if (head === null) return false;
  if (head.val === target) return true;
  return findRecursive(head.next, target);
}

function findIterative(head, target) {
  let current = head;

  while(current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
}

console.log('===== find recursive ===== ')
console.log(findRecursive(a, 3));
console.log(findRecursive(a, 5));

console.log('===== find iterative ====');
console.log(findIterative(a, 3));
console.log(findIterative(a, 5));