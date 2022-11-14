let readline = require("readline-sync"); // Khai báo thư viện

// Nhập: Nhập hai giá trị của a và b
let soXe = readline.question('Nhap so xe: ').split("").map(Number).reduce((a,b) => a + b, 0);

// using Casting nine out 
console.log(soXe % 9 || 9)

