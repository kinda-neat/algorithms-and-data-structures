const { performance, range } = require('../../utils');

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]; // window
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Time complexity is O(n)

console.log(maxSubarraySum([1, 2, 3, 2, 4, 2, 5], 3));
console.log(performance(() => maxSubarraySum(range(0,1000000), 10000))); // 0.034 seconds.
