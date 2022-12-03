const readline = require("readline-sync");

function nhapTen() {
  let ten;

  do {
    ten = readline.question("Nhap ten: ");
    if (ten.length == 0) console.log("Vui long khong de trong");
  } while (ten.length == 0);

  return ten;
}

function nhapNamSinh() {
  let namSinh;

  do {
    namSinh = Number(readline.question("Nhap nam sinh: "));

    if (namSinh <= 0 || kiemTraNamSinhCoHopLeKhong(namSinh) === false) {
      console.log("Nhap nam sinh hop le");
    }
  } while (namSinh <= 0 || kiemTraNamSinhCoHopLeKhong(namSinh)  === false);

  return namSinh;
}

function kiemTraNamSinhCoHopLeKhong(namSinh) {
  if (namSinh < 1900 || namSinh >= new Date().getFullYear() + 1) return false;
  return true;
}

function xinChao(ten, namSinh) {
  const tuoi = new Date().getFullYear() - namSinh;
  console.log(`Xin chào, mình tên là ${ten}`);
  console.log(`Mình sinh nam ${namSinh}`);
  console.log(`Minh ${tuoi} tuoi`);
  console.log("Nice to meet you");
}

function main() {
  // Gọi hàm nhập tên
  const ten = nhapTen();

  // Gọi hàm nhập năm sinh
  const namSinh = nhapNamSinh();

  // Gọi hàm xin chào
  xinChao(ten, namSinh);
}

main();
