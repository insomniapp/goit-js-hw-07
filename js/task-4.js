const loginForm = document.querySelector(".login-form");

function sendLogin(event) {
    event.preventDefault();

    if (event.target.elements.email.value.trim() === "" || event.target.elements.password.value.trim() === "") {
        alert("All form fields must be filled in");
    } else {
        const userLogin = {
            email: event.target.elements.email.value.trim(),
            password: event.target.elements.password.value.trim(),
        }
        console.log(userLogin);
    }
    loginForm.reset();
}

loginForm.addEventListener("submit", sendLogin);