let readline = require("readline-sync"); // Khai báo thư viện

// Nhập: Nhập hai giá trị của a và b
let a = Number(readline.question("Nhap a: "));
let b = Number(readline.question("Nhap b: "));

// Xử lý:
// let c = a ^ (2 + b) ^ 2 // cách 1;
// let c = a ** 2 + b ** 2 // cách 2;
let c = Math.pow(a,b) //cach 3;

//In giá trị
console.log("a^2 + b^2 =", c);
