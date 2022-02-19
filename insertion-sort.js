function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; ++i) {
    let j = i - 1;
    let key = arr[i];

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = key
  }

  return arr;
}


var result = insertionSort([10, 2, 9, 4, 3, 7, 8, 12, 5])
console.log(result)