const button = document.querySelectorAll('button');
const value = document.querySelector('#value');

let counterValue = 0;

const buttonMinus = button[0];
const buttonPlus = button[1];


buttonPlus.addEventListener('click', () => {
    counterValue += Number(buttonPlus.textContent)
    value.textContent = `${counterValue}`;
})

buttonMinus.addEventListener('click', () => {
    counterValue += Number(buttonMinus.textContent)
    value.textContent = `${counterValue}`;
})

