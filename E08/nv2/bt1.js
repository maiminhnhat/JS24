function main() {
  const btn = document.getElementsByTagName("button")[0];
  btn.addEventListener("click", () => {
    let arrayOfDice = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];
    let input = document.getElementsByTagName("input")[0];

    if (arrayOfDice.includes(input.value)) {
      let img = document.querySelector("#dice");
      img.src = "img/" + input.value + ".png";
    }
  });
}
main();
