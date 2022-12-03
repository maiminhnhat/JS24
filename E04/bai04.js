const readline = require("readline-sync");

function nhapLieu() {
    const ten =  readline.question("Nhap ten: ");
    const namSinh = Number(readline.question("Nhap nam sinh: "));
    xinChao(ten, namSinh);
}

function xinChao(ten, namSinh)
{
    console.log(`Xin chào, mình tên là ${ten}`)
    console.log(`Mình sinh nam ${namSinh}`)
    console.log("Nice to meet you");
}

nhapLieu()
