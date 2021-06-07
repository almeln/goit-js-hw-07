const inputEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');


inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {

    const value = event.currentTarget.value;

    textEl.style.fontSize = `${value}px`;    
  };