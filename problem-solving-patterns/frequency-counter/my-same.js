// Frequency Counter Pattern
const { performance, range } = require("../../utils");

function same(arr, squaredArr) {
  if (arr.length !== squaredArr.length) {
    return false;
  }

  const arrElementsFrequencies = mkNumToFrequencyMap(arr); // O(n)
  const squaredArrElementsFrequencies = mkNumToFrequencyMap(squaredArr); // O(n)

  return arr.every(
    // O(n)
    (n) => arrElementsFrequencies[n] === squaredArrElementsFrequencies[n ** 2]
  );
}

// 3 O(n) ~ O(n)

function mkNumToFrequencyMap(arr) {
  return arr.reduce((acc, n) => {
    if (n in acc) {
      acc[n] += 1;
    } else {
      acc[n] = 1;
    }
    return acc;
  }, {});
}

performance(() =>
  same(
    range(0, 1000000),
    range(0, 1000000, (x) => x ** 2)
  )
); // ~ 1.828 seconds or 1828 milliseconds
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([3, 2, 4, 1], [4, 16, 1, 9]));
