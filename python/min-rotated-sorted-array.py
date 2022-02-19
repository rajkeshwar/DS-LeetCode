
def findMin(nums):

    if len(nums) == 0: return -1
    if len(nums) == 1: return nums[0]

    low, hi = 0, len(nums) - 1
    
    if (nums[low] < nums[hi]):
        return nums[low]
    
    while low <= hi:
        mid = low + (hi - low) // 2
        if nums[mid] > nums[mid+1]:
            return nums[mid+1]
        if mid > 0 and nums[mid] < nums[mid-1]:
            return nums[mid]
        
        if nums[low] < nums[mid]:
            low = mid + 1
        else: 
            hi = mid - 1
            
    return nums[low]

print(findMin([2,1]))