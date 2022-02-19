

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const inorderIndexMap = {};
let inorderIndex = 0;

var buildTree = function (preorder, inorder) {

  for (let i = 0; i < inorder.length; i++) {
    inorderIndexMap[inorder[i]] = i;
  }

  return constructTree(preorder, 0, inorder.length - 1);
};

function constructTree(preorder, left, right) {
  if (left > right) return null;

  const rootValue = preorder[inorderIndex++];
  const mid = inorderIndexMap[rootValue];

  const node = new TreeNode(rootValue);
  node.left = constructTree(preorder, 0, mid - 1);
  node.right = constructTree(preorder, mid + 1, right);

  return node;
}

let result = buildTree([-1], [-1]);
console.log(result)


// https://www.youtube.com/watch?v=ihj4IQGZ2zc
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};


