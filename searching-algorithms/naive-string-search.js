function naiveStringSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) {
        break;
      }

      if (j === pattern.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveStringSearch("hahaha", "ha"));
console.log(naiveStringSearch("hahaha", "yo"));
console.log(naiveStringSearch("hahaha", "  "));
console.log(naiveStringSearch("hahaha", "a"));
console.log(naiveStringSearch("omddm gomgooasdmgomgg omgdaoaomg", "omg"));
