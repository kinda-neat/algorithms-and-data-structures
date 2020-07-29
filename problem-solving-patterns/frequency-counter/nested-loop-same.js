const { performance, range } = require("../../utils");

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // for each element in arr1 we do indexOf and in the worst case it will go through the whole arr2
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
} // O (n^2)

performance(() =>
  same(
    range(0, 1000000),
    range(0, 1000000, (x) => x ** 2)
  )
); // ~ 109.712 seconds or 109712 milliseconds
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([3, 2, 4, 1], [4, 16, 1, 9]));
