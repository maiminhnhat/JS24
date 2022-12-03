// Kiểm tra số nguyên tố
// n = 5 => Yes, vì chỉ chia hết cho 1 và 5
// n = 7 => Yes
// n = 8 => No, vì ngoài 1 và 8, còn chia hết cho 2 và 4
// n = 9 => No

// => 1. Cho biết n có bao nhiêu ước số.
// => 2. Nếu số lượng ước số là 2, thì YES, ngược lại NO
const readline = require("readline-sync");

let n = Number(readline.question("Nhap so n: "));
let dem = 0;
// 1. Cho biết n có bao nhiêu ước số.
for (let i = 1; i <= n; i++) {
  if (n % i == 0) dem++;
}
// 2. Nếu số lượng ước số là 2, thì YES, ngược lại NO
if (dem == 2) {
    console.log('YES');
}
else {
    console.log('NO');
}