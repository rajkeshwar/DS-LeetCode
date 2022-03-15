
/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root !== null) {
    if (p.val > root.val && q.val > root.val) {
      // p and q both are greater than parent
      root = root.right;
    } else if (p.val < root.val && q.val < root.val) {
      // p and q are on the left side
      root = root.left;
    } else {
      return root;
    }
  }
  return null;
};