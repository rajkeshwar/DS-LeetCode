

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements 
// without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

/**
 * input : [10,9,2,5,3,7,101,18]
 * output: [2,3,7,101] => 4
 * @param {*} nums 
 */

// Traversing backward direction
function lengthOfLis(nums) {
  const LIS = Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j])
      }
    }
  }

  return Math.max(...LIS);

}

// Traversing both loop forward direction
var lengthOfLIS = function (nums) {
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};


const input = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLis(input))