

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var buildTree = function (preorder, inorder) {

  if (!preorder || preorder.length === 0) return;
  if (!inorder || inorder.length === 0) return;

  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};


var buildTree = function(preorder, inorder) {
    
  function helper(preIndex, inStart, inEnd) {
  
    if (preIndex >= preorder.length || inStart > inEnd) return;

    const root = new TreeNode(preorder[preIndex]);
    const mid = inorder.indexOf(root.val);

    if (mid > inStart) root.left = helper(preIndex + 1, inStart, mid - 1);
    if (mid < inEnd) root.right = helper(preIndex + mid - inStart + 1, mid + 1, inEnd);

    return root;
  };
  
  return helper(0, 0, inorder.length - 1);
};


const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder))