const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const exit = document.getElementById("exit");

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("left-[-100%]");
    mobileMenu.classList.add("left-0");
    exit.classList.remove("hidden");
});

exit.addEventListener("click", () => {
    mobileMenu.classList.add("left-[-100%]");
    mobileMenu.classList.remove("left-0");
    exit.classList.add("hidden");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) {
        mobileMenu.classList.add("left-[-100%]");
        mobileMenu.classList.remove("left-0");
        exit.classList.add("hidden");
    }
});
