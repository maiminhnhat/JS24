const readline = require("readline-sync"); // Khai báo thư viện

let a = Number(readline.question("Nhap thang: "));

switch (a) {
  case 1:
    console.log(31);
    return;
  case 2:
    console.log(28);
    return;
  case 3:
    console.log(31);
    return;
  default:
    return;
}
