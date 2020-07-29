module.exports = {
  performance,
  range,
}

function performance(fn) {
  let t1 = Date.now();
  const result = fn();
  let t2 = Date.now();
  console.log(`Time elapsed: ${(t2 - t1)} milliseconds.`);
  console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
  return result;
};

function range(a, b, fn) {
  const fnToRun = fn ? fn : (x) => x;
  const x = [];
  for (let i = a; i <= b; i++) {
    x.push(fnToRun(i));
  }
  return x;
};
