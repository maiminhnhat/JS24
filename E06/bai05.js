const readline = require("readline-sync");
function nhapMang(a) {
  for (let i = 0; i < a.length; i++) {
    a[i] = Number(readline.question("Nhap so: "));
  }
}
function lietKeSNT(a) {
  for (let i = 0; i < a.length; i++) {
    if (laSNT(a[i])) {
      console.log(a[i]);
    }
  }
}

function laSNT(n) {
  let dem = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) dem++;
  }
  return dem == 2;
}

function main() {
  const n = Number(readline.question("Nhap so luong phan tu: "));
  const a = new Array(n);
  nhapMang(a);
  lietKeSNT(a);
}

main();
