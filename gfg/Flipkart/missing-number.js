/**
 * Missing number in array
 * Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
 * Input:
 * N = 5
 * A[] = {1,2,3,5}
 * Output: 4
 */

function missingNumber(array, n) {
  const indexedArray = new Array(n + 1);

  for (let num of array) {
    indexedArray[num] = num;
  }

  for (let j = 1; j <= n; j++) {
    if (!indexedArray[j]) {
      return j;
    }
  }
}

const input = [1,2,3,5], n = 5;
const retValue = missingNumber(input, n);
console.log(retValue);