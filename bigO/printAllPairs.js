function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    // O(n)
    for (var j = 0; j < n; j++) {
      // O(n)
      console.log(i, j);
    }
  }
}

// O(n) operation is inside of an O(n) operation = O (n * n) = O(n^2)

printAllPairs(10);
