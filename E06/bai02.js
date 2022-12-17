const readline = require("readline-sync");

function nhapVaTinhDiemTrungBinh(a) {
    let diem = 0
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(readline.question('Nhap diem: '))   
        diem += a[i] / 4     
    }
    return diem
}

function main() {
    const a = new Array(4)
    console.log(nhapVaTinhDiemTrungBinh(a))
}

main()