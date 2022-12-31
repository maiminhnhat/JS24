import { question } from "readline-sync"; // Khai báo thư viện

class Point2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Square {
  constructor(edges = 0, leftPoint = new Point2D(0, 0)) {
    this.edges = edges;
    this.leftPoint = leftPoint;
  }

  scan() {
    this.edges = Number(question("Nhap chieu dai moi canh hinh vuong: "));

    this.leftPoint.x = Number(question("Nhap x: "));
    this.leftPoint.y = Number(question("Nhap y: "));
  }

  print() {
    console.log(
      `Hinh Vuong co chieu dai moi canh la ${this.edges} va goc (${this.leftPoint.x}, ${this.leftPoint.y})`
    );
  }

  move(dx, dy) {
    this.leftPoint.x += dx;
    this.leftPoint.y += dy;
  }

  getArea() {
    let s = this.edges ** 2
    return s;
  }
}

class Program {
    constructor() {
      this.luaChon = 0;
      this.square = new Square();
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
      this.square.scan();
      this.square.print();
    }
  
    handlePrint() {
      this.square.print();
    }
  
    handleMove() {
      const dx = Number(question("Nhap dx: "));
      const dy = Number(question("Nhap dy: "));
      this.square.move(dx, dy);
  
      console.log("Vi tri moi cua hinh chu nhat la: ");
      this.square.print();
    }
  
    handleGetArea() {
      console.log(
        "Dien tich Hinh vuong la: ",
        this.square.getArea()
      );
    }
  }
  
  function main() {
    const program = new Program();
    program.run();
  }
  
  main();