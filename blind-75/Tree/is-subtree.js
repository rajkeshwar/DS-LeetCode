

/**
 * 572. Subtree of Another Tree
 */
var isSubtree = function (root, subRoot) {
  if (subRoot === null) return true;
  if (root === null) return false;

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};


function isSameTree(t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  if (t1.val !== t2.val) return false;

  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
} 