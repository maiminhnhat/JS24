let readline = require("readline-sync"); // Khai báo thư viện

// Nhập: Nhậphai giá trị của a và b
let a = Number(readline.question('Nhap a: '));
let b  = Number(readline.question('Nhap b: '))
let c  = Number(readline.question('Nhap c: '))

let result = (a ** 2*b ** 2)/c

console.log("Ket qua la:", result);