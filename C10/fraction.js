import { question } from "readline-sync"; // Khai báo thư viện

class Fraction {
  #numberator;
  #denominator;

  constructor(numberator = 0, denominator = 1) {
    this.#numberator = numberator;
    this.#denominator = denominator;
  }

  getNumberator() {
    return this.#numberator;
  }

  setNumberator(numberator) {
    return (this.#numberator = numberator);
  }

  getDenominator() {
    return this.#denominator;
  }

  setDenominator(denominator) {
    if (denominator !== 0) return (this.#denominator = denominator);
  }

  scan() {
    this.#numberator = Number(question("Nhap tu so: "));
    this.#denominator = Number(question("Nhap mau so: "));
  }

  print() {
    console.log(
      `Gia tri cua phan so la: ${this.#numberator}/${this.#denominator}`
    );
  }

  reduces() {
    let handleGcd = (a, b) => {
      return b ? handleGcd(b, a % b) : a;
    };
    let gcd = handleGcd(this.#numberator, this.#denominator);
    return [this.#numberator / gcd, this.#denominator / gcd];
  }

  normalize() {
    if (this.#numberator > 0 && this.#denominator > 0)
      return [`${this.#numberator}/${this.#denominator}`];
    if (
      (this.#numberator < 0 && this.#denominator > 0) ||
      this.#denominator < 0
    )
      return [`-${this.#numberator}/${this.#denominator}`];
    if (this.#numberator === 0 && this.#denominator === 1) return [0];
  }

  fractionPlus(fraction) {
    if (this.#denominator === fraction.#denominator)
      return [
        `${this.#numberator + fraction.#numberator}/${fraction.#denominator}`,
      ];

    this.#quyDongMauSo(fraction);

    const newNumberator = this.#numberator + fraction.#numberator;

    const newDenominator = this.#denominator;
    return [`${newNumberator} / ${newDenominator}`];
  }

  fractionMultiple(fraction) {
    const newNumberator = this.#numberator * fraction.#numberator;
    const newDenominator = this.#denominator * fraction.#denominator;

    return [`${newNumberator} / ${newDenominator}`];
  }

  boolEqual(fraction) {
    if (
      this.#numberator !== fraction.#numberator ||
      this.#denominator !== fraction.#denominator
    ) {
      this.#quyDongMauSo(fraction);
      this.#compareTwoFractionEqual(fraction);
    } else {
      this.#compareTwoFractionEqual(fraction);
    }
  }

  boolLessThan(fraction) {
    if (
      this.#numberator !== fraction.#numberator ||
      this.#denominator !== fraction.#denominator
    ) {
      this.#quyDongMauSo(fraction);
      return this.#compareTwoFractionLessThan(fraction);
    } else {
      return this.#compareTwoFractionLessThan(fraction);
    }
  }

  #quyDongMauSo(fraction) {
    const newFirstNumberator = this.#numberator * fraction.#denominator;
    const newFirstDenominator = this.#denominator * fraction.#denominator;

    const newSecondNumberator = fraction.#numberator * this.#denominator;
    const newSecondDenominator = fraction.#denominator * this.#denominator;

    this.setNumberator(newFirstNumberator);
    this.setDenominator(newFirstDenominator);
    fraction.setNumberator(newSecondNumberator);
    fraction.setDenominator(newSecondDenominator);
  }

  #compareTwoFractionEqual(fraction) {
    if (
      this.#numberator === fraction.#numberator ||
      this.#denominator === fraction.#denominator
    ) {
      return `Phan so ${this.#numberator}/ ${this.#denominator} bang phan so ${fraction.#numberator}/${fraction.#denominator}`;
    } else {
      return `Phan so ${this.#numberator}/ ${this.#denominator} khong bang phan so ${fraction.#numberator}/${fraction.#denominator}`;
    }
  }

  #compareTwoFractionLessThan(fraction) {
    if (
      this.#numberator < fraction.#numberator ||
      this.#denominator < fraction.#denominator
    ) {
      return `Phan so ${this.#numberator}/ ${this.#denominator} be hon phan so ${fraction.#numberator}/${fraction.#denominator}`;
    } else {
      return `Phan so ${this.#numberator}/ ${this.#denominator} lon hon phan so ${fraction.#numberator}/${fraction.#denominator}`;
    }
  }
}

class Program {
  constructor() {
    this.luaChon = 0;
    this.fraction = new Fraction();
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
          this.handleReduces();
          break;
        case 4:
          this.handleNormalize();
          break;
        case 5:
          this.handleFractionPlus();
          break;
        case 6:
          this.handleFractionMultiple();
          break;
        case 7:
          this.handleBoolEqual();
          break;
        case 8:
          this.handleBoolLess();
          break;
      }
      doIt = question("Nhan 1 de tiep tuc, nhan 0 de ket thuc: ");
    } while (doIt == "1");
  }

  printMenu() {
    console.log("1. Scan");
    console.log("2. Print");
    console.log("3. Reduces");
    console.log("4. Normalize");
    console.log("5. Fraction Plus");
    console.log("6. Fraction Multiple");
    console.log("7. Equal");
    console.log("8. Less");

    this.luaChon = Number(question("Ban chon: "));
  }

  handleScan() {
    this.fraction.scan();
    console.log("Phan so vua nhap la: ");
    this.fraction.print();
  }

  handlePrint() {
    this.fraction.print();
  }

  handleReduces() {
    this.fraction.reduces();
    console.log("Phan so sau khi rut gon: ");
    this.fraction.print();
  }

  handleNormalize() {
    this.fraction.normalize();
    console.log("Phan so sau khi chuan hoa: ");
    this.fraction.print();
  }

  handleFractionPlus() {
    const fraction = new Fraction();
    fraction.scan();

    console.log(this.fraction.fractionPlus(fraction));
  }

  handleFractionMultiple() {
    const fraction = new Fraction();
    fraction.scan();

    console.log(this.fraction.fractionMultiple(fraction));
  }

  handleBoolEqual() {
    const fraction = new Fraction();
    fraction.scan();

    console.log(this.fraction.boolEqual(fraction));
  }

  handleBoolLess() {
    const fraction = new Fraction();
    fraction.scan();

    console.log(this.fraction.boolLessThan(fraction));
  }
}

function main() {
  const program = new Program();
  program.run();
}
main();
