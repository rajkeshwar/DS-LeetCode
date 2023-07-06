/*
 * @Author: mikey.zhaopeng
 * @Date: 2023-07-06 23:57:58
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2023-07-07 00:02:10
 */

function bubbleSort(arr) {
  let N = arr.length,
    swapped;

  for (let i = 0; i < N - 1; i++) {
    swapped = false;

    for (let j = 0; j < N - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) return arr;
  }

  return arr;
}

const input = [10, 2, 9, 4, 3, 7, 8, 12, 5];
console.log(bubbleSort(input));