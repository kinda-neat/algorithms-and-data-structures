const { performance, range } = require('../../utils');

function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }

  let max = -Infinity; // for the case where all elements of the arr are negative
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

// Time complexity is O(n^2), imagine a case where arr.length is 1000000 and you need to find max sum of 10000 elements

console.log(maxSubarraySum([1, 2, 3, 2, 4, 2, 5], 3));
console.log(performance(() => maxSubarraySum(range(0,1000000), 10000))); // 9.166 seconds