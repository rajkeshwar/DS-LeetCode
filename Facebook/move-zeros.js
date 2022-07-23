var moveZeroes = function (nums) {
  // [0, 1, 0]

  let temp, i = 0, k = 0, j = nums.length - 1;

  while (i < j) {
    while (i < j && nums[i] !== 0) i++ // Zero
    while (i < j && nums[j] === 0) j-- // Non zero

    k = i

    while (k < j) {
      nums[k] = nums[k + 1]
      k++
    }

    nums[j] = 0
  }

  return nums;
};

const input = [0,1,0,3,12]
console.log(moveZeroes(input))