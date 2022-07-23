

// Incomplete
function moveZeroes(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let j = i;
      while (j++ < nums.length) {
        nums[j] = nums[j + 1];
      }
      nums[j] = 0;
    }
  }
  return nums;
}

const ret = moveZeroes([0, 1, 0, 3, 12])
console.log(ret)