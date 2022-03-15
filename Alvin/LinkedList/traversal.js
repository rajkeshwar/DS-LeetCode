
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

function print(head) {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

function valuesList(head) {
  let current = head;
  const results = [];

  while (current !== null) {
    results.push(current.val);
    current = current.next;
  }

  return results;
}


function printRecursive(head) {
  if (head === null) return;
  console.log(head.val);
  printRecursive(head.next);
}


function valuesRecursive(head, results=[]) {
  if (head === null) return results;
  results.push(head.val);
  return valuesRecursive(head.next, results);
}

print(a);
console.log(valuesList(a));

printRecursive(a);
console.log(valuesRecursive(a));