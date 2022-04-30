
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var sortedArrayToBST = function (nums) {

  function helper(left, right) {
    if (left > right) return null;

    // always choose left middle node as root
    const mid = left + Math.floor((right - left) / 2);

    // preorder traversal: node -> left -> right
    const root = new TreeNode(nums[mid]);
    root.left = helper(left, mid - 1);
    root.right = helper(mid + 1, right);
    return root;
  }

  return helper(0, nums.length - 1);
};

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sortedArrayToBST(input);



function prepareTree(nums) {
  let i = -1;

  function helper() {
    if (i >= nums.length) return null;
    const node = new TreeNode(++i);
    node.left = helper(++i);
    node.right = helper(++i);
    return node;
  }

  return helper(0, 1, 2);
}

console.log(prepareTree(input));

function bfs(root) {
  if (root === null) return null;
  const queue = [root];

  const results = []
  while (queue.length > 0) {
    const levels = [];
    let i = 0, len = queue.length;

    while (i++ < len ) {
      const current = queue.shift();
      levels.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    results.push(levels);
  }

  return results;
}
// console.log(bfs(result));