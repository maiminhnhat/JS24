let readline = require("readline-sync"); // Khai báo thư viện

function kiemTraSoNguyenTo(n) {
  let dem = 0;
  // 1. Cho biết n có bao nhiêu ước số.
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) dem++;
  }
  // 2. Nếu số lượng ước số là 2, thì YES, ngược lại NO
  if (dem == 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function nhapLieu() {
  // Nhập: Nhậphai giá trị của a và b
  let a = Number(readline.question("Nhap a: "));

  kiemTraSoNguyenTo(a);
}

nhapLieu()
