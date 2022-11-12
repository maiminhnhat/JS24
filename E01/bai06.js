let readline = require("readline-sync"); // Khai báo thư

let toan = Number(readline.question("Nhap diem mon toan: "));
let ly = Number(readline.question("Nhap diem mon ly: "));
let hoa = Number(readline.question("Nhap diem mon hoa: "));
let sinh = Number(readline.question("Nhap diem mon sinh: "));

let diemTrungBinh = (toan + ly + hoa + sinh) / 4;

console.log("trung diem cac mon:", diemTrungBinh);
