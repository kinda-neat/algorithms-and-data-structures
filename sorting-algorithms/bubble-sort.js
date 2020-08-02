const { swap } = require("../utils");

// largest values bubble up to the top
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // when i is 4, j is 3, for 4 values we make 3 comparisons
      // as we progress, the end becomes sorted
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([21, 3, 93, 1]));
// we need to make:
// [21, 3, 93, 1] - 3 comparisons [(21,3), (21,93), (93, 1)]
// [3, 21, 1, 93] - 2 comparisons [(3,21), (21,1)]
// [3, 1, 21, 93] - 1 comparison  (3,1)
// [1, 3, 21, 93]

console.log(bubbleSort([1, 21, 12, -2, 33, 3, 393, 63, 2, 3]));
