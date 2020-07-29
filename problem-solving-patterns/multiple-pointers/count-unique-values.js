// arr is sorted
function countUniqueValues(arr) {
  if (arr.length < 2) {
    return arr.length;
  }

  let lastUniqValue = arr[0];
  let lastUniqValueIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    // one iteration, without arr mutations
    if (arr[i] === lastUniqValue) {
      continue;
    } else {
      // arr[lastUniqValueIndex + 1] = arr[i];
      lastUniqValue = arr[i];
      lastUniqValueIndex++;
    }
  }

  return lastUniqValueIndex + 1;
} // Time complexity - O(n), space complexity - O(1)

console.log(countUniqueValues([]));
console.log(countUniqueValues([3]));
console.log(countUniqueValues([1, 3]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
