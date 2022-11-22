const readline = require("readline-sync"); // Khai báo thư viện

const n = Number(readline.question("Nhap so: "));

if (n < 0) {
    console.log("n la so am");
} else {
    console.log("n la so duong")
}
