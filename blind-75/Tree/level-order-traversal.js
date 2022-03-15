

/**
 * 102. Binary Tree Level Order Traversal
 */
var levelOrder = function (root) {
  if (root === null) return [];

  const queue = [root];
  const results = [];

  while (queue.length > 0) {
    const levels = [];
    let i = 0, len = queue.length;

    while (i++ < len) {
      const current = queue.shift();
      levels.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    results.push(levels);
  }
  return results;
};