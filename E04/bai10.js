let readline = require("readline-sync"); // Khai báo thư viện

// Trả về true nếu n là SNT, ngược lại trả về false
function kiemTraSoNguyenTo(n) {
  let dem = 0;

  // 1. Cho biết n có bao nhiêu ước số.
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) dem++;
  }
  // 2. Nếu số lượng ước số là 2, thì return true, ngược lại return false
  if (dem == 2) {
    return true;
  } else {
    return false;
  }
}

// In số nguyên tố trong đoạn m, n
function inCacSoNguyenTo(m, n) {
  for (let i = m; i <= n; i++) {
    if (kiemTraSoNguyenTo(i) == true)
      // i la SNT
      console.log(i);
  }
}

// Nhập: Nhập hai giá trị của a và b
function nhapLieu() {
  let m = Number(readline.question("Nhap m: "));

  let n = Number(readline.question("Nhap n: "));

  inCacSoNguyenTo(m, n);
}

nhapLieu();
