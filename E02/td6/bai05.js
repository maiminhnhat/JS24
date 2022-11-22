const readline = require("readline-sync"); // Khai báo thư viện

let a = Number(readline.question("Nhap so a: "));

let b = Number(readline.question("Nhap so b: "));

let c = Number(readline.question("Nhap so c: "));

let dem = 0;

if (a < 0) dem++;
if (b < 0) dem++;
if (c < 0) dem++;

console.log(dem)
