const readline = require("readline-sync"); // Khai báo thư viện

let canhA = Number(readline.question("Nhap canh A cua tam giac: "));

let canhB = Number(readline.question("Nhap canh B cua tam giac: "));

let canhC = Number(readline.question("Nhap canh C cua tam giac: "));

if (canhA == canhB || CanhA == canhC || canhB == CanhC) {
  console.log("tam giac can");
} else {
  console.log("tam giac ko can");
}
