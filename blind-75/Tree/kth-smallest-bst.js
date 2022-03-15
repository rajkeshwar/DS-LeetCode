
/**
 * 230. Kth Smallest Element in a BST
 */

var kthSmallest = function (root, k) {

  const stack = [];

  while (true) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if (--k === 0) return root.val;
    root = root.right;
  }

};