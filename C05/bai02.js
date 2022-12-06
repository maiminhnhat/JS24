const readline = require("readline-sync");

function main() {
  const user =  nhapThongTin();
  console.log(user);
}

function nhapThongTin() {
    const user = {
        username: '',
        password: '',
        email: '',
        phone: ''
    }

    user.username = readline.question('Nhap username: ');
    user.password = readline.question('Nhap password: ');
    user.email = readline.question('Nhap email: ');
    user.phone = readline.question('Nhap phone: ');

    tinhSoNut(user.phone);
    return user;
}

function tinhSoNut(phone) {
    let soNut = phone.split("").map(Number).reduce((a,b) => a + b, 0);

    console.log(soNut % 10)
}

//Run program
main();
