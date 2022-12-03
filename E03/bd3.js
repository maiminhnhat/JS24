const readline = require("readline-sync");

let n = Number(readline.question("Nhap so n: "));

let dem = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0 && i % 2 == 0) dem++;
}

