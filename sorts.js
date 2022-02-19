

function selectionSort(arr) {

  let minId, i, n = arr.length;
  for (i = 0; i < n - 1; i++) {
    minId = findMinId(arr, i + 1);

    if (arr[i] < arr[minId]) {
      swap(arr, i, minId);
    }
  }

  return arr;
}

function findMinId(arr, i) {
  let len = arr.length, minId = len - 1;

  while (--len && len > i) {
    if (arr[len] < arr[minId]) {
      minId = len;
    }
  }

  return minId;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let result = selectionSort([10, 2, 9, 4, 3, 7, 8, 12, 5])

console.log(result)