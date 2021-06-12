const counterRef = document.querySelector('#controls input');

const boxesContainer = document.querySelector('#boxes');

const renderBtn = document.querySelector('[data-action="render"]');

const destroyBtn = document.querySelector('[data-action="destroy"]');

const INITIAL_ITEM_SIZE = 30;

const itemSize = {
    value: INITIAL_ITEM_SIZE,
    increment() {
    this.value += 10;
    },
    reset() {
    this.value = INITIAL_ITEM_SIZE;
    },
};

renderBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = counterRef.value;
    const items =[];

    for (let i = 0; i < amount; i += 1) {
        const divItem = document.createElement('div');
        divItem.style.backgroundColor = getRandomColor();
        divItem.style.height = `${itemSize.value}px`;
        divItem.style.width = `${itemSize.value}px`;
        itemSize.increment();

        items.push(divItem);

    }

    boxesContainer.append(...items);
}

function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function getRandomColor() {
  const red = getRandom(0, 255);
  const green = getRandom(0, 255);
  const blue = getRandom(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
    itemSize.reset();
}








