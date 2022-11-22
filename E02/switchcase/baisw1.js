const readline = require("readline-sync"); // Khai báo thư viện

let a = Number(readline.question("Nhap so a: "));

switch (a) {
  case 1:
    console.log("Mot");
    return;
  case 2:
    console.log("Hai");
    return;
  case 3:
    console.log("Ba");
    return;
  default:
    return;
}
