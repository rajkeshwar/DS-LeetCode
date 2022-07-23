

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let l = 0, r = 0;

  while (r < nums.length) {
    if (nums[r] !== nums[l]) {
      nums[++l] = nums[r];
    }
    r++;
  }

  return l + 1;
}

const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const res = removeDuplicates(input);

console.log(res);