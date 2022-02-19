

def search(nums, target):
  
  def find_rotate_index(left, right):
    pivot = left + right >> 1

    if nums[left] < nums[right]:
      return 0

    while left <= right:
      pivot = left + right >> 1

      if nums[pivot] > nums[pivot+1]:
        return pivot+1
      else:
        if nums[left] > nums[pivot]:
          right = pivot - 1
        else:
          left = pivot + 1

    return -1


  def search(left, right):
    
    while left <= right:
      pivot = left + right >> 1

      if nums[pivot] == target:
        return pivot

      if target > nums[pivot]:
        left = pivot + 1
      else:
        right = pivot - 1

    return -1

  n = len(nums)

  if n == 0: return -1

  if n == 1:
    0 if nums[0] == target else -1

  rotate_index = find_rotate_index(0, n - 1)
  
  if rotate_index == 0:
    return search(0, n - 1)

  if nums[0] > target:
    return search(rotate_index, n - 1)
  else:
    return search(0, rotate_index)

print(search([3, 0, 4], 0))