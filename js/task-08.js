const counterEl = document.querySelector('input');

const buttonRender = document.querySelector('[data-action="render"]');

const buttonDestroy = document.querySelector('[data-action="destroy]');

const boxesEl = document.querySelector('#boxes');


function createBoxes(amount) {

    for (let i = 0; i <= amount; i += 1) {
        const divEl = document.createElement('div');
        console.log(divEl);
    }
  };

  buttonRender.addEventListener('click', createBoxes);
