
function mergeSort(arr, start = 0, end = arr.length) {

  let mid = Math.floor((start + end - start) / 2);

  if (start >= end) return;

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end)
  mergeHalves(arr, start, end)

}

function mergeHalves(arr, start, end) {

}