let readline = require("readline-sync"); // Khai báo thư
let n = Number(readline.question("Nhap so: "));

let donVi, chuc, tram; // Khai bao 3 bien cung luc

donVi = n % 10;
chuc = parseInt(n / 10) % 10; // De loai bo va lay so cuoi cua n
tram = parseInt(n / 100); // De loai bo hai so cuoi cua n

console.log("Đơn vị: ", donVi);
console.log("Chuc:", chuc);
console.log("Tram:", tram);
