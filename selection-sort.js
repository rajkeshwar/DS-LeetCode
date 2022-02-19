

function selectionSort(arr) {
  let n = arr.length, min_idx, j;

  for (let i = 0; i < n - 1; i++) {
    min_idx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min_idx]
    arr[min_idx] = temp;
  }

  return arr;
}


let result = selectionSort([10, 2, 9, 4, 3, 7, 8, 12, 5])
console.log(result)