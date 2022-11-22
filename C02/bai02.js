const readline = require("readline-sync"); // Khai báo thư viện

let n = Number(readline.question("Nhap so a: "));

let tram = parseInt(n / 100); // De loai bo hai so cuoi cua n
if (tram == 9) console.log("YES");
else console.log("NO");
