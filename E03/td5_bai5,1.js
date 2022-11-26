const readline = require("readline-sync");

let a = Number(readline.question("Nhap so a: "));
let b = Number(readline.question("Nhap so b: "));

let soChan = ""
let soLe = ""

for (let i = a; i <= b; i++) {
    if(i % 2 == 0) soChan = soChan + " " + i
}

for (let i = a; i <= b; i++) {
    if( i % 2 !== 0) soLe = soLe + " " + i
}

console.log(soChan)
console.log(soLe)
