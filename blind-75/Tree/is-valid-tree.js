
/**
 * 98. Validate Binary Search Tree
 */
var isValidBST = function (root) {
  function isValid(node, left, right) {

    if (node === null) return true;

    if (!(node.val > left && node.val < right)) {
      return false;
    }

    return isValid(node.left, left, node.val) &&
      isValid(node.right, node.val, right);
  }

  return isValid(root, -Infinity, Infinity);
};