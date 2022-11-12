let readline = require("readline-sync"); // Khai báo thư viện

// Nhập: Nhậphai giá trị của a và b
let a = Number(readline.question('Nhap a: '));
let b  = Number(readline.question('Nhap b: '))

// let a = 3;
// let b = 2;

// Xử lý: Phép chia
let c = a / b;

//In giá trị
console.log("a/b =", c);
