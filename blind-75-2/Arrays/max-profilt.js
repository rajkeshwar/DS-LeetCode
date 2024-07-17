var maxProfit = function (prices) {
  let N = prices.length;
  let maxProfit = 0;
  let l = 0,
    r = 1;

  while (r < N) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      l = r;
    }
    r++;
  }

  return maxProfit;
};

