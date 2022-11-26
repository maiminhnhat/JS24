const readline = require("readline-sync");

let n = Number(readline.question("Nhap so n: "));
// let m = Number(readline.question("Nhap so m: "));

//Cach 1
// for (let i = m; i <= n; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// Cach 2
for (let i = 2; i <= n; i = i + 2) {
  console.log(i);
}
