const readline = require("readline-sync");

let a = Number(readline.question("Nhap so a: "));
let b = Number(readline.question("Nhap so b: "));

let soChan = ""
let soLe = ""

if( a > b) {
    let temp = a;
    a = b ;
    b = temp;
}

for (let i = a; i <= b; i++) {
    if(i % 2 == 0) soChan +=  " " + i;
    else soLe += i + " ";
}


console.log('SoChan: ',soChan)
console.log('SoLe: ',soLe)