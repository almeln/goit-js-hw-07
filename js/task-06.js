const inputEl = document.querySelector('#validation-input');

const validationInputLength = Number(inputEl.getAttribute('data-length'));

function addCurrentClass(add, remove) {

}

inputEl.addEventListener("blur", e => {
    const val = e.currentTarget.value;
    
    const changeClass = (addClass, removeClass) => {
        e.currentTarget.classList.add(addClass);
        e.currentTarget.classList.remove(removeClass);
    }

    if (val.length === validationInputLength) {
        changeClass('valid', 'invalid');
    } else {
        changeClass('invalid', 'valid');
    };
});

