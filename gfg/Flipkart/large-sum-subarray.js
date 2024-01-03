/**
 * Largest Sum Subarray of Size at least K
 * Given an array a of length n and a number k, find the largest sum of the subarray
 * containing at least k numbers. It is guaranteed that the size of array is at-least k.
 * n = 4
 * a[] = {-4, -2, 1, -3}
 * k = 2
 * Output = -1
 */

function maxSumWithK(a, n, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += a[i];
  }

  let j = 0;
  let last = 0;
  let ans = sum;

  for (let i = k; i < n; i++) {
    sum += a[i];
    last += a[j];
    j++;

    ans = Math.max(ans, sum);

    if (last < 0) {
      sum = sum - last;
      ans = Math.max(ans, sum);
      last = 0;
    }
  }
  return ans;
}

let arr = [-4, -2, 1, -3];
let k = 2;
console.log(maxSumWithK(arr, arr.length, k));
