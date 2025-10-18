const btn = document.getElementById("btn");
const colorText = document.getElementById("color");

btn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
});

function getRandomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, "0");
}
