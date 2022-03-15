
/**
 * Coin change problem recursion with memoization
 */
var coinChange = function (coins, amount) {
  return helper(coins, amount);
};


function helper(coins, amount, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let fewer = Infinity;

  for (let coin of coins) {
    const rem = amount - coin;
    const result = helper(coins, rem, memo);
    if (result >= 0 && result < fewer) {
      fewer = result + 1;
    }
  }

  memo[amount] = fewer;

  return fewer === Infinity ? -1 : fewer;
}