
/**
 * Coin change problem recursion with memoization
 */
var coinChange = function (coins, amount) {
  const result = helper(coins, amount);
  return result === null ? -1 : result.length;
};

function helper(coins, amount, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return [];
  if (amount < 0) return null;

  let shortestCom = null;

  for (let coin of coins) {
    const rem = amount - coin;
    const remCombination = helper(coins, rem, memo);

    if (remCombination !== null) {
      const combination = [...remCombination, coin];

      if (shortestCom === null || combination.length < shortestCom.length) {
        shortestCom = combination;
      }
    }
  }

  memo[amount] = shortestCom
  return shortestCom;
}