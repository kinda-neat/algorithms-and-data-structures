const { swap } = require("../../utils");

// similar to bubble sort, but places small values into sorted position
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }

  return arr;
} // Time complexity is O(n^2)

console.log(selectionSort([21, 3, 93, 1]));
console.log(selectionSort([1, 21, 12, -2, 33, 3, 393, 63, 2, 3]));
