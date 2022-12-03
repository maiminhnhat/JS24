let readline = require("readline-sync"); // Khai báo thư viện

function soSanh(a, b) {
    if(a == b) console.log(' a bang b')
    else if (a > b) console.log('a lon hon b')
    else console.log('a nho hon b');
}

function nhapLieu() {
  // Nhập: Nhậphai giá trị của a và b
  let a = Number(readline.question("Nhap a: "));

  let b = Number(readline.question("Nhap b: "));

  soSanh(a, b);
}

nhapLieu()
