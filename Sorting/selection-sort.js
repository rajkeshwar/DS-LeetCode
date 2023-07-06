function selectionSort(arr) {
  let N = arr.length,
    minId;

  for (let i = 0; i < N - 1; i++) {
    minId = i;

    for (let j = i; j < N; j++) {
      if (arr[j] < arr[minId]) {
        minId = j;
      }
    }

    [arr[i], arr[minId]] = [arr[minId], arr[i]];
  }
  return arr;
}

const input = [10, 2, 9, 4, 3, 7, 8, 12, 5];
console.log(selectionSort(input));
