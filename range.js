module.exports = function range(a, b, fn) {
  const fnToRun = fn ? fn : (x) => x;
  const x = [];
  for (let i = a; i <= b; i++) {
    x.push(fnToRun(i));
  }
  return x;
};
