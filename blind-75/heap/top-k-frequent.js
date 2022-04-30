/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const countMap = {}
  const freq = Array(nums.length + 1).fill().map(() => []);

  for (let n of nums) {
    countMap[n] = (countMap[n] || 0) + 1;
  }

  for (let k in countMap) {
    freq[countMap[k]].push(Number(k));
  }

  const res = [];

  for (let idx = freq.length - 1; idx >= 0; idx--) {
    for (let v of freq[idx]) {
      res.push(v);
      if (res.length === k) return res;
    }
  }
};

const ret = topKFrequent([4,1,-1,2,-1,2,3], 2);
console.log(ret);