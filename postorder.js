
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var postorderTraversal = function (root) {
  const res = [];
  const stack = [];

  if (root === null) return res;

  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    res.unshift(node.val);

    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }

  return res;
};

var root = new TreeNode(1);
root.right = new TreeNode(2, new TreeNode(3));

postorderTraversal(root);
