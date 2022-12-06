const readline = require("readline-sync");

function main() {
  const person =  nhapThongTin();

  // Gọi hàm xin chào
  xinChao(person);
}

function xinChao(person) {
  const tuoi = new Date().getFullYear() - person.namSinh;
  console.log(`Xin chào, mình tên là ${person.ten}`);
  console.log(`Mình sinh nam ${person.namSinh}`);
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

function nhapThongTin() {
    const person = {
        ten: '',
        namSinh: 0
    }

    //Nhap ten
    person.ten = nhapTen();

    //Nhap nam sinh
    person.namSinh = nhapNamSinh();

    return person;
}

//Run program
main();
