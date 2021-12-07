const fotmInput = document.querySelector('#validation-input');

fotmInput.addEventListener("input", (event) => {
    fotmInput.addEventListener("blur", (event) => {
        event.currentTarget.value.length === 6 ?
            fotmInput.id = 'validation-input__valid':
            fotmInput.id = 'validation-input__invalid';
     });
     
})


