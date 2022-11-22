const readline = require("readline-sync"); // Khai báo thư viện

let a = Number(readline.question("Nhap so a: "));

let b = Number(readline.question("Nhap so b: "));

let c = Number(readline.question("Nhap so c: "));

let s = 0;

if (a < 0) s += a;
if (b < 0) s += b;
if (c < 0) s += c;

console.log(s)
