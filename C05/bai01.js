const readline = require("readline-sync");

function tinhDienTichHinhChuNhat(width, height) {
  return width * height;
}

function main() {
  const width = Number(readline.question("Nhap chieu rong: "));

  const height = Number(readline.question("Nhap chieu rong: "));

  console.log(tinhDienTichHinhChuNhat(width, height));
}

main();
