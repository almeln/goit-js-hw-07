const inputEl = document.querySelector('#validation-input');

const validationInputLength = Number(inputEl.getAttribute('data-length'));


inputEl.addEventListener("blur", e => {
    const val = e.currentTarget.value;
    if (val.length === validationInputLength) {
        e.currentTarget.classList.add("valid");
        e.currentTarget.classList.remove("invalid");
    } else {
        e.currentTarget.classList.remove("valid");
        e.currentTarget.classList.add("invalid");
    };
});

