var findMin = function (nums) {
  let res = Infinity;
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    } else {
      let mid = l + Math.floor((r - l) / 2);
      res = Math.min(res, nums[mid]);
      if (nums[mid] >= nums[l]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return res
};