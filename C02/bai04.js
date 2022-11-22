const readline = require("readline-sync"); // Khai báo thư viện

let nam = Number(readline.question("Nhap nam: "));

if (nam % 4 == 0 || nam % 100 > 0 || nam % 400 == 0)
  console.log("Nam", nam + "la nam nhuan");
