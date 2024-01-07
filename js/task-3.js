const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", addName);

function addName() {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue ? inputValue : "Anonymouse";
}
