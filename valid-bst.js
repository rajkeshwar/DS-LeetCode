
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return traverse(root, -Infinity, Infinity);
};

function traverse(node, left, right) {
  if (node === null) return true;

  if (!(node.val < right && node.val > left)) {
    return false;
  }

  return (
    traverse(node.left, left, node.val) &&
    traverse(node.right, node.val, right)
  )
}