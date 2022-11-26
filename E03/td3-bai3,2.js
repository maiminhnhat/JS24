const readline = require("readline-sync");

let n = Number(readline.question("Nhap so n: "));

for (let i = 1; i <= n; i++) {
  if (n % i == 0) console.log(i);
}

///Note:
// Uoc cua 1 so la nhung so chia het cho so do [1,n]+1