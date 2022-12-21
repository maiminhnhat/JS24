function main() {
  let numberForDice1 = Math.floor(Math.random() * 6 + 1);
  let numberForDice2 = Math.floor(Math.random() * 6 + 1);

  let dice1 = document.getElementById("dice-1");
  let dice2 = document.getElementById("dice-2");
  dice1.src = "img/dice" + numberForDice1 + ".png";
  dice2.src = "img/dice" + numberForDice2 + ".png";
}
