const { swap } = require("../utils");

function bubbleSortOptimized(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// data is nearly sorted, or sorted
console.log(bubbleSortOptimized[(8, 1, 2, 3, 4, 5, 6, 7)]);
