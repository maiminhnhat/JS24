let readline = require("readline-sync"); // Khai báo thư

let width = Number(readline.question("Nhap chieu rong hinh chu nhat:"));
let height = Number(readline.question("Nhap chieu dai hinh chu nhat"));

let s = width * height;

console.log("Dien tich cua hinh chu nhat:", s);
