
// Find the buttons and sections
const openButton = document.getElementById("openBtn");
const surpriseSection = document.getElementById("surprise");

const loveButton = document.getElementById("loveBtn");
const secretMessage = document.getElementById("secretMessage");


// Open the surprise
openButton.addEventListener("click", function () {

    surpriseSection.style.display = "flex";

    surpriseSection.scrollIntoView({
        behavior: "smooth"
    });

});


// Show the secret message
loveButton.addEventListener("click", function () {

    secretMessage.classList.remove("hidden");

    loveButton.textContent = "Dad, you're special ❤️";

});
