const { performance } = require("../utils");

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

performance(() => console.log(addUpTo(1000000000)));
