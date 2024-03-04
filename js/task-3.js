const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function putNameInMassege(event) {
    
    if (event.target.value.trim() === "") {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = event.target.value.trim();
    };
};

inputName.addEventListener("input", putNameInMassege)