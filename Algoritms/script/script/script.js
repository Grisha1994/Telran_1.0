const arr = [2, 35, 6, 78, 7, 5];

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let p = helperP(arr, start, end);
    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
  }
}

function helperP(arr, start, end) {
  p = arr[end];
  let i = start;
  let j;
  for (j = start; j <= end - 1; j++) {
    if (arr[j] < p) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, j);
  return i;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);