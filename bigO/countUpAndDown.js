function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) { // O(n)
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) { // O(n)
    console.log(j);
  }
  console.log("Back down. Bye!");
}
// 2* O(n) ~ O(n)
countUpAndDown(10);
