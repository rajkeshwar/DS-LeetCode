
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function dfsTreeSum(root) {
  if (root === null) return 0;

  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    sum += (current.val || 0);

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return sum;
}

function treeSumRecursive(root) {
  if (root === null) return 0;
  return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right);
}


function bfsTreeSum(root) {
  if (root === null) return 0;

  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    sum += (current.val || 0)

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return sum;
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

console.log(dfsTreeSum(a))
console.log(treeSumRecursive(a));
console.log(bfsTreeSum(a))