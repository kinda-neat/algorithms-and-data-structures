module.exports = function performance(fn) {
  let t1 = Date.now();
  fn();
  let t2 = Date.now();
  console.log(`Time elapsed: ${(t2 - t1)} milliseconds.`);
  console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
};

