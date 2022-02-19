

def twoSum(nums, target):
    hashmap = {}

    for i, num in enumerate(nums):
        reminder = target -  num
        if reminder in hashmap and hashmap[reminder] != i:
            return [i, hashmap[reminder]]
        hashmap[num] = i


print(twoSum([2,7,11,15], 9))