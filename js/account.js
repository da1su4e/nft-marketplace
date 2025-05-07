const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("confirm-password");
const errorText = document.getElementById("error-text");
const fillText = document.getElementById("fill-text");
const createAccountButton = document.getElementById("create-button");
const toggleButtons = document.querySelectorAll(".lock-button");
const icon = document.querySelectorAll(".fa-lock");

function validatePassword(event) {
    event.preventDefault();

    if (userPassword.value !== userConfirmPassword.value) {
        userConfirmPassword.classList.add("border-red-600");
        errorText.classList.remove('hidden');
    } else {
        userConfirmPassword.classList.remove("border-red-600");
        errorText.classList.add("hidden");
    }
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
