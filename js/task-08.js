const counterEl = document.querySelector('input');

const buttonRender = document.querySelector('[data-action="render"]');

const buttonDestroy = document.querySelector('[data-action="destroy]');

const boxesEl = document.querySelector('#boxes');

function onInputChange(event) {
    let amount = event.currentTarget.value;
    console.log(amount);
};

counterEl.addEventListener('input', onInputChange);


function createBoxes(amount) {

    for (let i = 0; i <= amount; i += 1) {
        divEl = document.createElement('div');
        console.log(divEl);
    }

    return divEl;
  };

buttonRender.addEventListener('click', createBoxes);









