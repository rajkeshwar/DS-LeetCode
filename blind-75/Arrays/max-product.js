var maxProduct = function (nums) {
  let curMin = 1, curMax = 1;
  let res = Math.max(...nums);

  for (let num of nums) {
    if (num === 0) {
      curMin = curMax = 1;
    } else {
      const tmp = curMax * num;
      curMax = Math.max(tmp, curMin * num, num);
      curMin = Math.min(tmp, curMin * num, num);
      res = Math.max(res, curMax);
    }
  }

  return res;
}

const ret = maxProduct([2,3,-2,4]);
console.log(ret);