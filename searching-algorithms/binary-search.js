const { range } = require("../utils");

// arr must be sorted
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== value && left < right) {
    if (value < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === value ? middle : -1;
} // Time complexity is O(log(n)): when n is 16, steps = 4; when n is 32, steps = 5

console.log(binarySearch(range(0, 1000), -10));
console.log(binarySearch(range(0, 1000), -1));
console.log(binarySearch(range(0, 1000), 0));
console.log(binarySearch(range(0, 1000), 10));
console.log(binarySearch(range(0, 1000), 746));
console.log(binarySearch(range(0, 1000), 747));
console.log(binarySearch(range(0, 1001), 1000));
console.log(binarySearch(range(0, 1000), 39234));
