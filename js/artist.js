const copyButton = document.getElementById("copyButton");
const followButton = document.getElementById("followButton");

copyButton.addEventListener('click', () => {
    const textToCopy = copyButton.innerText.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
        copyButton.innerText = 'Copied!';
        setTimeout(() => {
            copyButton.innerText = '0xc0E3...B79C';
        }, 1500);
    });
});

followButton.addEventListener("click", () => {
    const followIcon = document.getElementById("followIcon");

    followButton.innerText = 'Following';
    // followIcon.classList.remove("fa-plus");
    // followIcon.classList.add("fa-check")
});
