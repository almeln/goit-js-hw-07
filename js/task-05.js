const inputEl = document.querySelector('input');
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
    nameOutput.textContent = 'незнакомец';
    } else {
    nameOutput.textContent = event.currentTarget.value;
    }
  };