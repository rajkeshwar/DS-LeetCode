/*
 * @Author: mikey.zhaopeng
 * @Date: 2023-07-06 23:47:54
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2023-07-06 23:56:57
 */

function insertionSort(arr) {
  let N = arr.length;

  for (let i = 1; i < N; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

const input = [10, 2, 9, 4, 3, 7, 8, 12, 5];
console.log(insertionSort(input));
