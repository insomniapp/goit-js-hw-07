function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  
  destroyBoxes();
  amount = input.value;
  if (amount >= 1 && amount <= 100) { 
    for (let i = 0; i < amount; i++) {
      const addedBox = document.createElement("div");
      boxes.append(addedBox);
      addedBox.style.width = `${30 + i * 10}px`;
      addedBox.style.height = `${30 + i * 10}px`;
      addedBox.style.backgroundColor = getRandomHexColor();
    }
  }
  input.value = "";
}

function destroyBoxes() {
 const boxContainer = document.getElementById('boxes');
 boxContainer.innerHTML = '';
  
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);