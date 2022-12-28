import { question } from "readline-sync"; // Khai báo thư viện

class point2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(width = 0, height = 0, leftPoint = new point2D(0, 0)) {
    this.width = width;
    this.height = height;
    this.leftPoint = leftPoint;
  }

  scan() {
    this.width = Number(question("Nhap width: "));
    this.height = Number(question("Nhap height: "));

    this.leftPoint.x = Number(question("Nhap x: "));
    this.leftPoint.y = Number(question("Nhap y: "));
  }

  print() {
    console.log(
      `Hinh Chu Nhat co chieu dai ${this.height}, chieu rong ${this.width} va goc (${this.leftPoint.x}, ${this.leftPoint.y})`
    );
  }

  move(dx, dy) {
    this.leftPoint.x += dx;
    this.leftPoint.y += dy;
  }

  getArea() {
    let s = this.width * this.height;
    return s;
  }
}

class Program {
  constructor() {
    this.luaChon = 0;
    this.rectangle = new Rectangle();
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
          this.handleGetArea();
          break;
      }
      doIt = question("Nhan 1 de tiep tuc, nhan 0 de ket thuc: ");
    } while (doIt == "1");
  }

  printMenu() {
    console.log("1. Nhap");
    console.log("2. Xuat");
    console.log("3. Di chuyen");
    console.log("4. Tinh Dien tich");
    this.luaChon = Number(question("Ban chon: "));
  }

  handleScan() {
    this.rectangle.scan();
    this.rectangle.print();
  }

  handlePrint() {
    this.rectangle.print();
  }

  handleMove() {
    const dx = Number(question("Nhap dx: "));
    const dy = Number(question("Nhap dy: "));
    this.rectangle.move(dx, dy);

    console.log("Vi tri moi cua hinh chu nhat la: ");
    this.rectangle.print();
  }

  handleGetArea() {
    console.log(
      "Dien tich Hinh chu nhat la: ",
      this.rectangle.getArea()
    );
  }
}

function main() {
  const program = new Program();
  program.run();
}

main();
