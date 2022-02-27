
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function dfsIterative(root) {
  if (root === null) return [];
  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
}

function dfsRecursive(root) {
  if (root === null) return [];

  const leftValues = dfsIterative(root.left);
  const rightValues = dfsIterative(root.right);

  return [root.val, ...leftValues, ...rightValues];
}


//        a
//      /  \
//     b    c
//   /  \     \
//  d    e     f       

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// console.log(dfsIterative(a));
console.log(dfsRecursive(a));

