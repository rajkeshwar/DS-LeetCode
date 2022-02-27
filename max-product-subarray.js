var maxProduct = function (nums) {
  let currMin = currMax = 1;
  let res = Math.max(...nums);

  for (let n of nums) {
    if (n === 0) {
      currMin = currMax = 1;
    }
    let temp = currMax * n;
    currMax = Math.max(currMax * n, currMin * n, n);
    currMin = Math.min(temp, currMin * n, n);
    res = Math.max(res, currMax);
  }

  return res;
};