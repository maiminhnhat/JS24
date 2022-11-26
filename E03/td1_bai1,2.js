const readline = require("readline-sync");

let n = Number(readline.question("Nhap so n: "));

while (n % 2 == 0) {
  n *= 2;
  console.log(n);
}
