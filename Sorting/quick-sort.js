/*
 * @Author: mikey.zhaopeng
 * @Date: 2023-07-07 00:03:32
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2023-07-07 00:11:00
 */

function quickSort(arr, l, r) {
  if (l >= r) return;

  let pivot = arr[(l + r) >> 1];
  let index = partition(arr, l, r, pivot);

  quickSort(arr, l, index - 1);
  quickSort(arr, index, r);
}

function partition(arr, l, r, pivot) {
  while (l <= r) {
    while (arr[l] < pivot) l++;
    while (arr[r] > pivot) r--;

    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return l;
}

const input = [10, 2, 9, 4, 3, 7, 8, 12, 5];
quickSort(input, 0, input.length - 1)
console.log(input);
