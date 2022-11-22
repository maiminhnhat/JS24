const readline = require("readline-sync"); // Khai báo thư viện

let a = Number(readline.question("Nhap so a: "));

let b = Number(readline.question("Nhap so b: "));

if(a < b) console.log('so a lon hon b');
if(a > b) console.log('so a be hon b');
if(a === b) console.log('so a bang so b');