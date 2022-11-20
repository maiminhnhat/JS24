const readline = require("readline-sync"); // Khai báo thư viện

let canhA = Number(readline.question("Nhap canh A cua tam giac: "));

let canhB = Number(readline.question("Nhap canh B cua tam giac: "));

let canhC = Number(readline.question("Nhap canh C cua tam giac: "));

// if (canhA == canhB && canhB == canhC) {
//   console.log("tam giac deu");
// } else {
//   console.log("tam giac khong deu");
// }

// Phu dinh cua cach tren
if (canhA !== canhB || canhB !== canhC) {
  console.log("tam giac ko deu");
} else {
  console.log("tam giac deu");
}

//De Morgan
// A && B
//Phu dinh: !A || !B
