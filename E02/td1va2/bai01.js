const readline = require("readline-sync"); // Khai báo thư viện

const n = Number(readline.question("Nhap so nguyen duong: "));

if (n % 2 == 0) {
  console.log("So chan");
} else {
  console.log("So le");
}
