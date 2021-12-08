const fotmInput = document.querySelector('#validation-input');


fotmInput.addEventListener("input", (event) => {
    fotmInput.addEventListener("blur", (event) => {
        event.currentTarget.value.length === Number(fotmInput.dataset["length"]) ?
            fotmInput.id = 'validation-input__valid':
            fotmInput.id = 'validation-input__invalid';
     });
     
})


