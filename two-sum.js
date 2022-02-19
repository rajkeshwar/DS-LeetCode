var twoSum = function (nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const remIndex = numsMap.get(target - nums[i]);
    if (remIndex !== undefined && remIndex !== i) {
      return [remIndex, i];
    }
    numsMap.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([2,7,11,15], 9))