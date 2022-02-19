
// Definition for a Node.
function Node(val, children) {
  this.val = val;
  this.children = children;
};


/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const res = [];
  const stack = [];

  if (root === null) return res;

  stack.push(root);

  while (stack.length >= 0) {
    const curr = stack.pop();
    res.unshift(curr.val);

    for (let child of curr.children) {
      stack.push(child);
    }
  }

  return res;
}

// [1, null, 3, 2, 4, null, 5, 6]

const input = [1, null, 3, 2, 4, null, 5, 6].reduce((root, value) => {
  if (root === null) {
    root = new ListNode(value)
  } else {
    root.next = new ListNode(value)
  }
  return root;
}, null)

postorder(input);