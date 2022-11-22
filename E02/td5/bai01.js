const readline = require("readline-sync"); // Khai báo thư viện

let a = Number(readline.question("Nhap so a: "));

let b = Number(readline.question("Nhap so b: "));

if (a == 0 && b == 0) console.log("PTVSN");
else if (a != 0 && b == 0) console.log("Phuong trinh co nghiem x = 0");
else if (a == b && b != 0) console.log("PTVN");
else console.log("PTCN", +(-b / a));
