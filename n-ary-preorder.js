
function Node(val, children) {
  this.val = val;
  this.children = children;
};


/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = [];

  if (root === null) return res;

  const stack = [root];

  while (stack.length > 0) {
    curr = stack.pop();
    res.push(curr.val);

    let len = curr.children.length;

    while (--len >= 0) {
      stack.push(curr.children[len]);
    }
  }

  return res;
};