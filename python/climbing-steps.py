
# Time Complexity: O(n)
# Space complexity : O(n)

import math

def climbing_steps(n):
  if n == 1: return 1

  dp = [None] * (n + 1)

  dp[1] = 1
  dp[2] = 2

  print(dp)

  for i in range(3, n + 1):
    dp[i] = dp[i-1] + dp[i-2]

  return dp[n]

# print(climbing_steps(5))



# Time Complexity: O(n)
# Space Complexity: O(1)

def climbing_stairs_2(n):
  if n == 1: return 1

  one, two = 1, 2

  for i in range(3, n + 1):
    temp = one + two
    one = two
    two = temp

  return two

# print(climbing_stairs_2(5))
# print([0]+[math.inf]*5)

print(list(min(j, 2) for j in range(5)))