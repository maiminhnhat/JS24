const readline = require("readline-sync"); // Khai báo thư viện

let a = Number(readline.question("Nhap so a: "));

let b = Number(readline.question("Nhap so b: "));

let c = Number(readline.question("Nhap so c: "));

let delta = b * b - 4 * a * c;
let x1, x2;

if (delta < 0) console.log("PTVN");
else {
  if (delta == 0)
    console.log("phuong trinh co nghiem kep", (x1 = x2 = (-b / 2) * a));
  else if (delta > 0) {
    x1 = ((-b + Math.sqrt(delta)) / 2) * a;

    x2 = ((-b - Math.sqrt(delta)) / 2) * a;

    console.log("phuong trinh co nghiem", x1 + " " + x2);
  }
}
