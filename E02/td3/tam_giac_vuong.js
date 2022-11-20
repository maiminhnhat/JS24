const readline = require("readline-sync"); // Khai báo thư viện

let a = Number(readline.question("Nhap canh A cua tam giac: "));

let b = Number(readline.question("Nhap canh B cua tam giac: "));

let c = Number(readline.question("Nhap canh C cua tam giac: "));

if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {
    console.log("tam giac vuong");
  } else {
    console.log("tam giac ko vuong");
  }
  