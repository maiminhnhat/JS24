import { question } from "readline-sync"; // Khai báo thư viện

class point2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  scan() {
    this.x = Number(question("Nhap x: "));
    this.y = Number(question("Nhap y: "));
  }

  print() {
    console.log(`(${this.x}, ${this.y})`);
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  getDistance(point) {
    return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
  }
}

class Program {
  constructor() {
    this.luaChon = 0;
    this.point = new point2D();
  }

  run() {
    let doIt = "1";
    do {
      console.clear();
      this.printMenu();
      switch (this.luaChon) {
        case 1:
          this.handleScan();
          break;
        case 2:
          this.handlePrint();
          break;
        case 3:
          this.handleMove();
          break;
        case 4:
          this.handleGetDistance();
          break;
      }
      doIt = question("Nhan 1 de tiep tuc, nhan 0 de ket thuc: ");
    } while (doIt == "1");
  }

  printMenu() {
    console.log("1. Nhap");
    console.log("2. Xuat");
    console.log("3. Di chuyen");
    console.log("4. Tinh Khoang Cach");
    this.luaChon = Number(question("Ban chon: "));
  }

  handleScan() {
    this.point.scan();
    console.log("Diem vua nhap la: ");
    this.point.print();
  }

  handlePrint() {
    console.log("Diem dang co la: ");
    this.point.print();
  }

  handleMove() {
    const dx = Number(question("Nhap dx: "));
    const dy = Number(question("Nhap dy: "));
    this.point.move(dx, dy);

    console.log("Vi tri moi cua diem la: ");
    this.point.print();
  }

  handleGetDistance() {
    const point = new point2D();
    point.scan();
    console.log(
      "Khoang cach giua hai diem AB: ",
      this.point.getDistance(point)
    );
  }
}

function main() {
  const program = new Program();
  program.run();
}

main();
