const readline = require("readline-sync");

function main() {
  const person = nhapThongTin();

  // Gọi hàm xin chào
  xinChao(person);
}

function xinChao(person) {
  const tuoi = new Date().getFullYear() - person.namSinh;
  console.log(`Xin chào, mình tên là ${person.ten}`);
  console.log(`Mình sinh nam ${person.namSinh}`);
  console.log(
    `Minh ở ${person.diaChi.soNha} ${person.diaChi.duong} phuong ${person.diaChi.phuong} quan ${person.diaChi.quan} ${person.diaChi.thanhPho}`
  );
  console.log(`Minh ${tuoi} tuoi`);
  console.log("Nice to meet you");
}

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

    if (namSinh <= 0 || !kiemTraNamSinhCoHopLeKhong(namSinh)) {
      console.log("Nhap nam sinh hop le");
    }
  } while (namSinh <= 0 || !kiemTraNamSinhCoHopLeKhong(namSinh));

  return namSinh;
}

function kiemTraNamSinhCoHopLeKhong(namSinh) {
  return namSinh > 1900 && namSinh < new Date().getFullYear() + 1;
}

function nhapDiaChi() {
  const diaChi = {
    soNha: "",
    duong: "",
    phuong: "",
    quan: "",
    thanhPho: "",
  };
  diaChi.soNha = readline.question("Nhap so nha: ");
  diaChi.duong = readline.question("Nhap duong: ");
  diaChi.phuong = readline.question("Nhap phuong: ");
  diaChi.quan = readline.question("Nhap quan: ");
  diaChi.thanhPho = readline.question("Nhap thanh pho: ");

  if (!kiemTraThanhPho()) console.log("Ban nay khong o TPHCM");
  return diaChi;
}

function kiemTraThanhPho(thanhPho) {
  return thanhPho === "TPHCM";
}

function nhapThongTin() {
  const person = {
    ten: "",
    namSinh: 0,
    diaChi: nhapDiaChi(),
  };

  //Nhap ten
  person.ten = nhapTen();

  //Nhap nam sinh
  person.namSinh = nhapNamSinh();

  return person;
}

//Run program
main();
