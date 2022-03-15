
/**
 * 104. Maximum Depth of Binary Tree
 */

var maxDepth = function (root) {
  let depth = 0;
  if (root === null) return 0;
  const queue = [root];

  while (queue.length > 0) {
    let i = 0, len = queue.length;
    while (i++ < len) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    depth += 1;
  }

  return depth;
};


var maxDepthRecursive = function (root) {
  if (root === null) {
    return 0;
  } else {
    const leftHeight = maxDepth(root.left);
    const rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};