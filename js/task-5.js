function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector(".change-color");
const backgroundColorSpan = document.querySelector(".color");
const body = document.querySelector("body");

buttonChange.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  backgroundColorSpan.textContent = newColor;
});
