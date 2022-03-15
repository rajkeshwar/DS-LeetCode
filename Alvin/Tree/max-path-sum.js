
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxPathSum(root) {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const maxPathChildSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.val + maxPathChildSum;
}

const a = new Node(2);
const b = new Node(3);
const c = new Node(4);
const d = new Node(1);
const e = new Node(5);
const f = new Node(6);

//        2
//      /  \
//     3    4
//   /  \     \
//  1    5     6   

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(maxPathSum(a))