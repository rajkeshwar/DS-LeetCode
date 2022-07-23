

function findKthLargest(arr, k) {
  let l = 0, r = arr.length - 1;

  while (l <= r) {
    let pivotIndex = _partion(arr, l, r)
    if (pivotIndex === arr.length - k) {
      return arr[pivotIndex]
    } else if (pivotIndex > arr.length - k) {
      r = pivotIndex - 1
    } else {
      l = pivotIndex + 1
    }
  }
}

function _partion(arr, l, r) {
  let pivot = arr[r]
  let index = l;
  for (let i = l; i < r; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
      index++
    }
  }

  [arr[index], arr[r]] = [arr[r], arr[index]]

  return index;
}


const ret = findKthLargest([5, 7, 2, 3, 4, 1, 6], 3)
console.log(ret)