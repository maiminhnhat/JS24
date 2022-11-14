let readline = require("readline-sync"); // Khai báo thư viện

const PI = 3.14;

// Nhập: Nhậphai giá trị của a và b
let r = Number(readline.question('Nhap ban kinh: '));

let c = (r * 2) * PI
let s =  (r ** 2) * PI

console.log("Dien tich hinh tron :", s)
console.log("Chu vi hinh tron :", c);