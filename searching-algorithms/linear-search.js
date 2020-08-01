const { states } = require('../utils');

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
} // Time Complexity - O(n)

console.log(linearSearch(states, "Nevada"));
console.log(linearSearch(states, "Yo"));
