
function bubbleSort(arr) {
  let n = arr.length, swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (swapped == false)
      return arr;
  }

  return arr;

}

var result = bubbleSort([10, 2, 9, 4, 3, 7, 8, 12, 5])
console.log(result)