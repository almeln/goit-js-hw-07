let counterValue = 0;

const counterEl = document.querySelector('#value');

const buttonDecr = document.querySelector('[data-action="decrement"]');

const buttonIncr = document.querySelector('[data-action="increment"]');

const decrement = () => {
    counterValue -= 1;
    return counterEl.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    return counterEl.textContent = counterValue;
};

buttonDecr.addEventListener('click', decrement);

buttonIncr.addEventListener('click', increment);