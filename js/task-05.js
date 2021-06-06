const inputEl = document.querySelector('input');
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// if (nameInput = '') {
//     return nameOutput;
// } else {
//     return nameOutput = nameInput;
// };

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
    nameOutput.textContent = 'незнакомец';
    } else {
    nameOutput.textContent = event.currentTarget.value;
    }
  };