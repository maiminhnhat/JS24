const readline = require("readline-sync");

let n = Number(readline.question("Nhap so n: "));

let uocSo = []

for (let i = 1; i <= n; i++) {
  if (n % i == 0) uocSo.push(i);
}

console.log(uocSo.length)