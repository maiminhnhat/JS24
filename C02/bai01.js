const readline = require("readline-sync"); // Khai báo thư viện

let a = Number(readline.question("Nhap DTB: "));

if (a >= 5) console.log("DAU");
else console.log("ROT");
