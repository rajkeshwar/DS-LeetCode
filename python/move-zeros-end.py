
def move_zeros(nums):
  if nums is None: return []

  L, R = 0, len(nums) - 1

  while L < R:

    while nums[R] == 0:
      R -= 1

    if nums[L] == 0:
      T = nums[L]
      nums[L] = nums[R]
      nums[R] = T

    L += 1

  return nums


input = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]
print(move_zeros(input))