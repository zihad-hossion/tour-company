const menuBtn = document.querySelector(".menu-bar");
const navLinks = document.querySelector("#mob #nav-links")

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
})