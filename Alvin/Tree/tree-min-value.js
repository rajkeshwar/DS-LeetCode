
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function dfsTreeMinValue(root) {
  if (root === null) return;

  const stack = [root];
  let minValue = Infinity;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < minValue) minValue = current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return minValue;
}


function treeMinValueRecursive(root) {
  if (root === null) return Infinity;
  return Math.min(root.val, treeMinValueRecursive(root.left), treeMinValueRecursive(root.right))
}

const a = new Node(2);
const b = new Node(3);
const c = new Node(4);
const d = new Node(1);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(dfsTreeMinValue(a))
console.log(treeMinValueRecursive(a))