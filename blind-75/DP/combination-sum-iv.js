

/**
 * 
 */
var combinationSum4 = function (nums, target) {
  return helper(nums, target);
};


function helper(nums, target, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return 1;
  if (target < 0) return 0;

  let count = 0;

  for (let num of nums) {
    const rem = target - num;
    count += helper(nums, rem, memo);
  }

  memo[target] = count;

  return memo[target];
}

