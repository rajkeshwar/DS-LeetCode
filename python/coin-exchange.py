

def coin_exchange(coins, amount):

  dp = [amount+1] * (amount+1)
  dp[0] = 0

  for a in range(1, amount + 1):
    for c in coins:
      if a - c >= 0:
        result = min(dp[a], 1 + dp[a-c])
        print(result)
        dp[a] = result

  return dp[amount] if dp[amount] != float('inf') else -1


print(coin_exchange([1,2,5], 11))