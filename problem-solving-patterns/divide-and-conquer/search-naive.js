const { performance, range } = require("../../utils");

// arr is sorted
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
console.log(performance(() => search(range(0, 100000000), 72389472))); // ~ 2.024 seconds

// Linear search. Time complexity is O(n)
