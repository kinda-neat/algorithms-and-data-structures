const performance = require("../performance");

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

performance(() => console.log(addUpTo(1000000000)));
