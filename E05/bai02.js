const readline = require("readline-sync");

//Xử lý tạo person
function createPerson(ten, namSinh) {
  let person = {
    ten: "",
    namSinh: 0,
  };

  person.ten = ten;
  person.namSinh = namSinh;

  do {
    if (!hopLe(person)) console.log("Vui long nhap dung thong tin");

    person.ten = readline.question("Nhap ten: ");
    person.namSinh = Number(readline.question("Nhap nam sinh: "));
  } while (!hopLe(person));

  return person;
}

// kiểm tra xem person có hợp lệ hay không, có thì trả về true, không thì trả về false.
function hopLe(person) {
  return (person.ten !== "" || person.namSinh > 0) 
}

// Nhập thông tin và in ra kết quả
function nhapThongTin() {
  const ten = readline.question("Nhap ten: ");
  const namSinh = Number(readline.question("Nhap nam sinh: "));

  const person = createPerson(ten, namSinh);

  console.log(person);
}
nhapThongTin();
