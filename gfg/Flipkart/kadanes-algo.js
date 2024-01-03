/**
 * Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
 * @param {*} arr 
 * @param {*} N 
 * 
 * Arr[] = {1,2,3,-2,5}
 * Output: 9
 */

function maxSubarraySum(arr, N){
    let maxSum = arr[0];
    let currSum = 0;

    for (let num of arr) {
        currSum += num;
        maxSum = Math.max(maxSum, currSum)

        if (currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum
}

const arr = [1,2,3,-2,5]
const retVal = maxSubarraySum(arr, arr.length);
console.log(retVal)