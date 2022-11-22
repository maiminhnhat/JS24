const readline = require("readline-sync"); // Khai báo thư viện

let kw = Number(readline.question("Nhap kw dien: "));
let result;
if (kw < 100) result = kw * 2000;
else if (kw < 200) result = kw * 2500;
else result = kw * 3500;

console.log("so tien dien phai tra la:", result);
