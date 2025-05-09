const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("confirm-password");
const userName = document.querySelector('input[name="username"]');
const userEmail = document.querySelector('input[name="email"]');
const errorText = document.getElementById("error-text");
const fillText = document.getElementById("fill-text");
const createAccountButton = document.getElementById("create-button");
const toggleButtons = document.querySelectorAll(".lock-button");

function validatePassword(event) {
    event.preventDefault();

    if (
        userName.value.trim() === '' ||
        userEmail.value.trim() === '' ||
        userPassword.value.trim() === '' ||
        userConfirmPassword.value.trim() === ''
    ) {
        fillText.classList.remove('hidden');
        return; 
    } else {
        fillText.classList.add('hidden');
    }

    if (userPassword.value !== userConfirmPassword.value) {
        userConfirmPassword.classList.add("border-red-600");
        errorText.classList.remove('hidden');
    } else {
        userConfirmPassword.classList.remove("border-red-600");
        errorText.classList.add("hidden");
    }

    // remove error if input value is correct
    [userName, userEmail, userPassword, userConfirmPassword].forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove("border-red-600");
            errorText.classList.add('hidden');
            fillText.classList.add('hidden');
        });
    });
    
}

toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const input = index === 0 ? userPassword : userConfirmPassword;
        const icon = button.querySelector("i"); 

        const isPasswordHidden = input.type === "password";
        input.type = isPasswordHidden ? "text" : "password";

        if (isPasswordHidden) {
            icon.classList.remove("fa-lock");
            icon.classList.add("fa-unlock");
        } else {
            icon.classList.remove("fa-unlock");
            icon.classList.add("fa-lock");
        };
    });
});

createAccountButton.addEventListener("click", validatePassword);
