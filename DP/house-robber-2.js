
/**
 * 213. House Robber II
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  return Math.max(houseRob(nums.slice(0, -1)), houseRob(nums.slice(1)));
};


function houseRob(nums) {
  let rob1 = rob2 = 0;

  for (let n of nums) {
    let temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}