

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * A -> B -> C -> D -> E -> F
 * Q -> R
 */
function zipperList(headA, headB) {
  let tail = headA;
  let currentA = headA.next;
  let currentB = headB;

  let count = 0;

  while (currentA !== null && currentB !== null) {
    if (count % 2 === 0) {
      tail.next = currentB;
      currentB = currentB.next;
    } else {
      tail.next = currentA;
      currentA = currentA.next;
    }
    count += 1;
    tail = tail.next;
  }

  if (currentA !== null) tail.next = currentA;
  if (currentB !== null) tail.next = currentB;
  
  return headA;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const q = new Node('Q');
const r = new Node('R');

q.next = r;

const ret = zipperList(a, q);

function print(head, results=[]) {
  if (head === null) return results;
  results.push(head.val);
  return print(head.next, results);
}

console.log(print(ret))