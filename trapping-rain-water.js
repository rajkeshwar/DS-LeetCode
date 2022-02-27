var trap = function (height) {
  if (height.length === 0) return 0;

  let l = 0, r = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let res = 0;

  while (l < r) {
    leftMax = Math.max(leftMax, height[l]);
    rightMax = Math.max(rightMax, height[r]);

    if (leftMax < rightMax) {
      res += Math.max(0, leftMax - height[l]);
      l++;
    } else {
      res += Math.max(0, rightMax - height[r]);
      r--;
    }
  }

  return res;
};