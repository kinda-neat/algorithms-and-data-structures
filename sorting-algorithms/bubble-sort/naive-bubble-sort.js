const { swap } = require("../../utils");

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
} // Time complexity is O(n^2)

console.log(bubbleSort([21, 3, 93, 1]));
// [21, 3, 93, 1]
// [3, 21, 1, 93]
// [3, 1, 21, 93]
// [1, 3, 21, 93]
