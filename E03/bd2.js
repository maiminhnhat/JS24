const readline = require("readline-sync");

let a = Number(readline.question("Nhap so a: "));
let b = Number(readline.question("Nhap so b: "));

let soChan = []

for (let i = a; i <= b; i++) {
    if(i % 2 == 0) soChan.push(i);
}

console.log(soChan.length)
