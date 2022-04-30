var search = function (nums, target) {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (target === nums[mid]) return mid;

    // If left portion is sorted
    if (nums[l] <= nums[mid]) {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      // If right portion is sorted
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return -1;
};