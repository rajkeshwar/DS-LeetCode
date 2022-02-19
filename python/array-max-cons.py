
def array_max_cons(nums):
  max_sum = nums[0]
  current_sum = max_sum

  for num in nums[1:]:
    current_sum = max(num + current_sum, num)
    max_sum = max(current_sum, max_sum)

  return max_sum


print(array_max_cons([-2, 2, 5, -11, 6, 5]))      
