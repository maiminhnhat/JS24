const readline = require("readline-sync");

let a = Number(readline.question("Nhap so a: "));
let b = Number(readline.question("Nhap so b: "));

let soNguyen = [];

for (let i = a; i <= b; i++) {
    if(Number.isInteger(i)) soNguyen.push(i)
}

console.log(soNguyen.length)