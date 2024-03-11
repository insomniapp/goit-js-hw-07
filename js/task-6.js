function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createElem(amount) {
  const boxContainer = document.getElementById('boxes');

  boxContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxContainer.appendChild(newBox);
  }
}

function destroyElem() {
  const boxContainer = document.getElementById('boxes');
  boxContainer.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', validateFun);

function validateFun() {
  const inputNum = document.querySelector('input');
  const amount = parseInt(inputNum.value);

  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    createElem(amount);
    inputNum.value = '';
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
}

document.querySelector('[data-destroy]').addEventListener('click', destroyFun);

function destroyFun() {
  destroyElem();
}