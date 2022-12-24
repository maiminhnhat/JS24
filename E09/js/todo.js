const handleListTask = () => {
  const myUlTag = document.getElementById("myUL");

  for (let index = 0; index < myUlTag.children.length; index++) {
    const liTag = myUlTag.children[index];
    liTag.appendChild(createSpan());
    liTag.addEventListener("click", () => {
      liTag.classList.toggle("checked");
    });
  }
};

function createSpan() {
  const span = document.createElement("span");
  span.innerHTML = "X";
  span.className = "close"; // Cach 1
  // span.classList.add('close') // Cach 2

  span.addEventListener("click", () => {
    span.parentElement.remove();
  });
  return span;
}
handleListTask();
